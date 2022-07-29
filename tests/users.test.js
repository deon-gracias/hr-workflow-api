const request = require("supertest");
const app = require("../app");
const { deleteAllUsers } = require("../controllers/users");
const { connectToDb, disconnectFromDb } = require("../lib/db");

describe("Users", () => {
  beforeAll(() => {
    connectToDb();
  });

  afterAll(async () => {
    await deleteAllUsers();
    disconnectFromDb();
  });

  let user = {
    email: "johndoe@mail.com",
    password: "johndoe",
    username: "johndoe",
    firstname: "John",
    lastname: "Doe",
  };

  let createdUser = {};

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

    createdUser = res.body;

    return expect(createdUser).toEqual(
      expect.objectContaining({
        email: createdUser.email,
        username: createdUser.username,
      })
    );
  });

  // Find User by email
  it("should find user by email", async () => {
    const res = await request(app)
      .get("/users/signin")
      .send({ email: user.email })
      .expect(200);

    return expect(res.body).toEqual(
      expect.objectContaining({
        email: createdUser.email,
        username: createdUser.username,
      })
    );
  });

  // Find User by Id
  it("should find user by id", async () => {
    const res = await request(app)
      .get(`/users/${createdUser._id}`)
      .send()
      .expect(200);

    return expect(res.body).toEqual(
      expect.objectContaining({
        email: createdUser.email,
        username: createdUser.username,
      })
    );
  });

  // Delete User by Id
  it("should delete user by id", async () => {
    const res = await request(app)
      .delete(`/users/${createdUser._id}`)
      .send()
      .expect(200);

    return expect(res.body).toEqual(
      expect.objectContaining({
        email: createdUser.email,
        username: createdUser.username,
      })
    );
  });
});
