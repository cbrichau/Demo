const express = require("express");
const controller = require("../../controllers/articles.js");

const router = express.Router();

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
 *             $ref: '#/components/schemas/Payload.Article'
 *     responses:
 *       201:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response.Success.CreateOne.Article'
 */
router.post("/", controller.createOne);

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
 *               $ref: '#/components/schemas/Response.Success.ReadAll.Article'
 */
router.get("/", controller.readAll);

/**
 * @openapi
 * /api/articles/{id}:
 *   get:
 *     summary: Fetches one article.
 *     tags:
 *       - Articles
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response.Success.ReadOne.Article'
 */
router.get("/:id", controller.readOne);

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
 *             $ref: '#/components/schemas/Payload.Article'
 *     responses:
 *       200:
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Response.Success.Update.Article'
 */
router.patch("/:id", controller.updateOne);

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
 *               $ref: '#/components/schemas/Response.Success.Delete.Article'
 */
router.delete("/:id", controller.deleteOne);

module.exports = router;
