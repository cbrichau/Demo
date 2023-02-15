const express = require("express");
const controller = require("../../controllers/users.js");
const { verifyJWT } = require("../../middlewares/authentication.js");

const router = express.Router();

/* ************************************************** *\
	Create
\* ************************************************** */

// N/A, covered by authentication.signUp

/* ************************************************** *\
	Read
\* ************************************************** */

/**
 * @openapi
 * /api/users/{id}:
 *   get:
 *     summary: Fetches a user.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User.ReadOne.Response.Success'
 *       401:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User.ReadOne.Response.Success'
 */
router.get("/:id", verifyJWT, controller.readOne);

/* ************************************************** *\
	Update
\* ************************************************** */

/**
 * @openapi
 * /api/users/{id}:
 *   patch:
 *     summary: Updates a user.
 *     tags:
 *       - Users
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User.Payload'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User.Update.Response.Success'
 */
router.patch("/:id", verifyJWT, controller.updateOne);

/* ************************************************** *\
	Delete
\* ************************************************** */

// To do

module.exports = router;
