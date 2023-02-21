import supertest from "supertest";
import { createServer } from "../../config/server";
import mongoose from "mongoose";

const app = createServer();

afterAll(async () => {
	await mongoose.disconnect();
	await mongoose.connection.close();
});

describe("POST /api/authentication/sign-in", () => {
	const signInWith = async (payload: object) => {
		return await supertest(app).post("/api/authentication/sign-in").send(payload);
	};

	describe("Given valid credentials", () => {
		test("Responds with a 201 JSON response containing a JWToken", async () => {
			const { body, statusCode } = await signInWith({
				email: "email@example.com",
				password: "password",
			});
			expect(statusCode).toBe(201);
			expect(body).toHaveProperty("status", "success");
			expect(body.data.jwt).toBeDefined();
		});
	});

	describe("Given no credentials", () => {
		test('Responds with a 401 JSON response containg the "Missing credentials" error', async () => {
			const { body, statusCode } = await signInWith({});
			expect(statusCode).toBe(401);
			expect(body).toHaveProperty("status", "fail");
			expect(body.data).toHaveProperty("errors", ["Missing credentials"]);
		});
	});

	describe("Given invalid credentials", () => {
		test('Responds with a 401 JSON response containg the "Invalid credentials" error', async () => {
			const { body, statusCode } = await signInWith({
				email: "email@example.com",
				password: "wrong",
			});
			expect(statusCode).toBe(401);
			expect(body).toHaveProperty("status", "fail");
			expect(body.data).toHaveProperty("errors", ["Invalid credentials"]);
		});
	});
});
