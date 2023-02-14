const express = require("express");
const controller = require("../../controllers/authentication.js");

const router = express.Router();

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
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       type: object
 *                       properties:
 *                         id:
 *                           type: string
 *                           example: "success"
 */
router.post("/sign-up", controller.signUp);

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
 */
router.post("/sign-in", controller.signIn);

module.exports = router;
