const request = require("supertest");
const app = require("../app");

describe("Users", () => {
  const user = {
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

    console.log(res);

    return res;
  });
});
