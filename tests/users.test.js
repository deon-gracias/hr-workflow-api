const request = require("supertest");
const app = require("../app");

describe("Users", () => {
  // Check if server is working
  it("should receive 200", async () => {
    const res = await request(app)
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(200);

    return res;
  });
});
