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
 *               properties:
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   properties:
 *                     articles:
 *                       type: array
 *                       items:
 *                         properties:
 *                           _id:
 *                             type: string
 *                             example: "qsdfghjklm"
 *                           title:
 *                             type: string
 *                             example: "Lorem ipsum"
 *                           body:
 *                             type: string
 *                             example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi mauris, pulvinar eu interdum ut, pellentesque in turpis. "
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
 *                 status:
 *                   type: string
 *                   example: "success"
 *                 data:
 *                   properties:
 *                     article:
 *                       properties:
 *                         title:
 *                           type: string
 *                           example: "Lorem ipsum"
 *                         body:
 *                           type: string
 *                           example: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi mauris, pulvinar eu interdum ut, pellentesque in turpis. "
 *                         comments:
 *                           type: array
 *                           items:
 *                             properties:
 *                               body:
 *                                 type: string
 *                                 example: "Great article!"
 */
router.get("/:id", controller.readOne);

export default {
	router: router,
	schemas: schemas,
};
