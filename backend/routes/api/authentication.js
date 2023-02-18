const express = require("express");
const controller = require("../../controllers/authentication.js");
const successSchemas = require("../../middlewares/openapi/successSchemas");
const failSchema = require("../../middlewares/openapi/failSchema");

const router = express.Router();

let schemas = {};

/* ************************************************** *\
	Sign up
\* ************************************************** */

/**
 * @openapi
 * /api/authentication/sign-up:
 *   post:
 *     summary: Registers a new user.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "email@example.com"
 *               password:
 *                 type: string
 *                 example: "password"
 *               passwordConfirmation:
 *                 type: string
 *                 example: "password"
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication.SignUp.Response.Success'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication.SignUp.Response.Fail.400'
 *       409:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication.SignUp.Response.Fail.409'
 */
router.post("/sign-up", controller.signUp);

schemas["Authentication.SignUp.Response.Success"] = successSchemas.createOne("user");
schemas["Authentication.SignUp.Response.Fail.400"] = failSchema.withErrors('["Missing email", "Missing password", "Invalid password confirmation"]');
schemas["Authentication.SignUp.Response.Fail.409"] = failSchema.withErrors('["User already exists"]');

/* ************************************************** *\
	Sign in
\* ************************************************** */

/**
 * @openapi
 * /api/authentication/sign-in:
 *   post:
 *     summary: Provides a JSON Web Token on successful sign in.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "email@example.com"
 *               password:
 *                 type: string
 *                 example: "password"
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     jwt:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTVlMDlkMzZjZDkyZGZlZTQzZGIyOCIsImVtYWlsIjoiY2xpby5icmljaGF1dEBnbWFpbC5jb20iLCJpYXQiOjE2NTUwNDA3NzQsImV4cCI6MTY1NTA0Nzk3NH0.elznkoMFJwRrtbgsNJvoXnOWdFQgM9rp358r-3tcOwg"
 *       401:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Authentication.SignIn.Response.Fail.401'
 */
router.post("/sign-in", controller.signIn);

schemas["Authentication.SignIn.Response.Fail.401"] = failSchema.withErrors('["Missing credentials", "Invalid credentials"]');

module.exports = {
	router: router,
	authenticationSchemas: schemas,
};
