const request = require("supertest");
const app = require("../app");

describe("GET /health", () => {
  describe("GET request for checking server health", () => {
    test("should respond with 200 status code", async () => {
      const response = await request(app).get("/health");
      expect(response.statusCode).toBe(200);
    });
  });
});

describe("GET /", () => {
  describe("GET the main homepage in text/html form", () => {
    test("should return 200 status code", async () => {
      const response = await request(app).get("/");
      expect(response.statusCode).toBe(200);
    });
    test("should have return type text/html page", async () => {
      const response = await request(app).get("/");
      expect(response.headers["content-type"]).toEqual(
        expect.stringContaining("text/html")
      );
    });
  });
});

