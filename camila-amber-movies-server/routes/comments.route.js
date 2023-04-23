import express from "express";
import CommentsController from "../controllers/comments.controller.js";

const router = express.Router();

router.route("/").get(CommentsController.getAllComments);

export default router;
