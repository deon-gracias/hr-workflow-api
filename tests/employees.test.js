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
});
