import { Router } from "express";
import * as controller from "../../controllers/articles";
import Article from "../../models/Article";
import schemaGenerator from "mongoose-to-swagger";
import * as successSchemas from "./schemaTemplates/successSchemas";
import * as failSchema from "./schemaTemplates/failSchema";

const router = Router();

let schemas: { [key: string]: any } = {};

/* ************************************************** *\
	Create
\* ************************************************** */

/**
 * @openapi
 * /api/articles:
 *   post:
 *     summary: Creates a new article.
 *     tags:
 *       - Articles
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article.Payload'
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article.CreateOne.Response.Success'
 */
router.post("/", controller.createOne);

schemas["Article.Payload"] = schemaGenerator(Article, { omitFields: ["_id"] });
schemas["Article.CreateOne.Response.Success"] = successSchemas.createOne("article");

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
 *               $ref: '#/components/schemas/Article.ReadAll.Response.Success'
 */
router.get("/", controller.readAll);

schemas["Article.ReadAll.Response.Success"] = successSchemas.readAll("articles", schemaGenerator(Article, {}));

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
 *               $ref: '#/components/schemas/Article.ReadOne.Response.Success'
 */
router.get("/:id", controller.readOne);

schemas["Article.ReadOne.Response.Success"] = successSchemas.readOne("article", schemaGenerator(Article, {}));

/* ************************************************** *\
	Update
\* ************************************************** */

/**
 * @openapi
 * /api/articles/{id}:
 *   patch:
 *     summary: Updates an article.
 *     tags:
 *       - Articles
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
 *             $ref: '#/components/schemas/Article.Payload'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article.Update.Response.Success'
 */
router.patch("/:id", controller.updateOne);

schemas["Article.Update.Response.Success"] = successSchemas.update("article");

/* ************************************************** *\
	Delete
\* ************************************************** */

/**
 * @openapi
 * /api/articles/{id}:
 *   delete:
 *     summary: Deletes an article.
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
 *               $ref: '#/components/schemas/Article.Delete.Response.Success'
 *       400:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Article.Delete.Response.Fail.400'
 */
router.delete("/:id", controller.deleteOne);

schemas["Article.Delete.Response.Success"] = successSchemas.deleteOne();
schemas["Article.Delete.Response.Fail.400"] = failSchema.withErrors('["Invalid id"]');

export default {
	router: router,
	schemas: schemas,
};
