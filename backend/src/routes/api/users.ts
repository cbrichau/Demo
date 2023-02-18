import { Router } from "express";
import * as controller from "../../controllers/users";
import { verifyJWT } from "../../middlewares/authentication";
import User from "../../models/User";
import schemaGenerator from "mongoose-to-swagger";
import * as successSchemas from "./schemaTemplates/successSchemas";

const router = Router();

let schemas: { [key: string]: any } = {};

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

export default {
	router: router,
	schemas: schemas,
};
