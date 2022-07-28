const request = require('supertest')
const app = require('../app')

describe("Employee", () => {
    // Check if server is working
    it("should receive 200", async () => {
        return await request(app).get("/").expect("Content-Type", /json/).expect(200)
    })
})