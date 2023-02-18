import { Router } from "express";
import { openapiServe, openapiSetup } from "../../middlewares/openapi";
import articles from "./articles";
import authentication from "./authentication";
import users from "./users";

const router = Router();

router.use("/docs", openapiServe, openapiSetup);

router.use("/articles", articles.router);
router.use("/authentication", authentication.router);
router.use("/users", users.router);

export default router;
