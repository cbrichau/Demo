const express = require("express");
const controller = require("../../controllers/users.js");
const { verifyJWT } = require("../../middlewares/authentication.js");
const User = require("../../models/User.js");
const schemaGenerator = require("mongoose-to-swagger");
const successSchemas = require("../../middlewares/openapi/successSchemas");
const failSchema = require("../../middlewares/openapi/failSchema");

const router = express.Router();

let schemas = {};

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
 */
router.get("/:id", verifyJWT, controller.readOne);

schemas["User.ReadOne.Response.Success"] = successSchemas.readOne("user", schemaGenerator(User, {}));

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

schemas["User.Payload"] = schemaGenerator(User, { omitFields: ["_id"] });
schemas["User.Update.Response.Success"] = successSchemas.update("user");

/* ************************************************** *\
	Delete
\* ************************************************** */

// To do

module.exports = {
	router: router,
	usersSchemas: schemas,
};
