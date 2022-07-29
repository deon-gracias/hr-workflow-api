const request = require("supertest");
const app = require("../app");
const { connectToDb, disconnectFromDb } = require("../lib/db");

describe("Users", () => {
  beforeAll(() => {
    connectToDb();
  });

  afterAll(() => {
    disconnectFromDb();
  });

  let user = {
    email: "johndoe@mail.com",
    password: "johndoe",
    username: "johndoe",
    firstname: "John",
    lastname: "Doe",
  };

  // Check if server is working
  it("should receive 200", async () => {
    const res = await request(app)
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(200);

    return res;
  });

  // Create user
  it("should create user", async () => {
    const res = await request(app).post("/users/signup").send(user).expect(201);

    user = res.body;

    return res;
  });

  // Find User by email
  it("should find user by email", async () => {
    const res = await request(app)
      .get("/users/signin")
      .send({ email: user.email })
      .expect(200);

    return res;
  });

  // Find User by Id
  it("should find user by id", async () => {
    const res = await request(app).get(`/users/${user._id}`).send().expect(200);

    return res;
  });

  // Delete User by Id
  it("should delete user by id", async () => {
    const res = await request(app)
      .delete(`/users/${user._id}`)
      .send()
      .expect(200);

    return res;
  });
});
