import supertest from "supertest";
import { createServer } from "../../config/server";
import mongoose from "mongoose";

const app = createServer();

afterAll(() => {
	mongoose.connection.close();
});

describe("POST /api/authentication/sign-in", () => {
	describe("Given valid credentials", () => {
		test("Responds with a 201 JSON response containing a JWToken", async () => {
			await supertest(app)
				.post("/api/authentication/sign-in")
				.send({
					email: "email@example.com",
					password: "password",
				})
				.expect(201);
		});
	});
});
