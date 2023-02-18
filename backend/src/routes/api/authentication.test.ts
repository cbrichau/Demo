import { request } from "express";
import supertest from "supertest";
import authentication from "./authentication";

describe("POST /sign-up", () => {
	describe("Given valid credentials", () => {
		test("Responds with a 200 json response", async () => {
			const response = await request(authentication).post("/").send({
				email: "email@example.com",
				password: "password",
				passwordConfirmation: "password",
			});
			expect(response.statusCode).toBe(201);
			// expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));
		});
	});
});
