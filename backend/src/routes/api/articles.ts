import { Router } from "express";
import * as controller from "../../controllers/articles";
import schemaGenerator from "mongoose-to-swagger";
import * as successSchemas from "./schemaTemplates/successSchemas";
import * as failSchema from "./schemaTemplates/failSchema";

const router = Router();

let schemas: { [key: string]: any } = {};

/* ************************************************** *\
	Read
\* ************************************************** */

/**
 * @openapi
 * /api/articles:
 *   get:
 *     summary: Fetches all the articles.
 *     tags:
 *       - Articles
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 properties:
 *                   _id:
 *                     type: string
 *                     example: "qsdfghjklm"
 *                   title:
 *                     type: string
 *                     example: "Title"
 *                   body:
 *                     type: string
 *                     example: "Body"
 */
router.get("/", controller.readAll);

/**
 * @openapi
 * /api/articles/{id}:
 *   get:
 *     summary: Fetches an article.
 *     tags:
 *       - Articles
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
 *               properties:
 *                 title:
 *                   type: string
 *                   example: "Title"
 *                 body:
 *                   type: string
 *                   example: "Body"
 */
router.get("/:id", controller.readOne);

export default {
	router: router,
	schemas: schemas,
};
