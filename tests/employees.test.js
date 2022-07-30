const request = require("supertest");
const app = require("../app");
const { deleteAllOnboards } = require("../controllers/employees");
const { connectToDb, disconnectFromDb } = require("../lib/db");

describe("Employees", () => {
  beforeAll(() => {
    connectToDb();
  });

  afterAll(async () => {
    await deleteAllOnboards();
    disconnectFromDb();
  });

  let onboardEmployee = {
    firstname: "John",
    lastname: "Doe",
    preferredName: "John",
    position: "Junior Developer",
    phone: "(804) 994-5043",
    address: "31368 Riva Ridge Rd Doswell, Virginia(VA), 23047",
    city: "Doswell",
    state: "Virginia",
    zipCode: 23047,
    laptop: "linux",
    mouse: "wired",
    keyboard: "wired",
  };

  // Create onboard employee
  it("should create onboard", async () => {
    const res = await request(app)
      .post("/employees/onboard/create")
      .send()
      .expect("Content-Type", /json/)
      .expect(201);

    onboardEmployee._id = res.body._id;

    return expect(res.body).toEqual(
      expect.objectContaining({ _id: expect.any(String) })
    );
  });

  // Update onboard employee
  it("should update onboard", async () => {
    const res = await request(app)
      .put(`/employees/onboard/${onboardEmployee._id}`)
      .send(onboardEmployee)
      .expect("Content-Type", /json/)
      .expect(200);

    return expect(res.body).toEqual(expect.objectContaining(onboardEmployee));
  });

  let leave = {
    from: Date.now(),
    to: new Date(Date.now() + 1),
    type: "Personal",
  };

  it("should apply leave", async () => {
    const res = await request(app).post("/employees/leaves/apply").send(leave);

    leave._id = res.body._id;

    return expect(res.body).toEqual(
      expect.objectContaining({
        from: expect.any(String),
        to: expect.any(String),
        type: expect.any(String),
        approved: false,
      })
    );
  });

  it("should get leaves", async () => {
    const res = await request(app).get("/employees/leaves").send();

    return expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          from: expect.any(String),
          to: expect.any(String),
          type: expect.any(String),
          approved: false,
        }),
      ])
    );
  });

  it("should approve leave", async () => {
    const res = await request(app)
      .patch(`/employees/leaves/approve/${leave._id}`)
      .send();

    return expect(res.body).toEqual(
      expect.objectContaining({
        _id: leave._id,
        from: expect.any(String),
        to: expect.any(String),
        type: expect.any(String),
        approved: true,
      })
    );
  });
});
