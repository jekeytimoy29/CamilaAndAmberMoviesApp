import express from "express";
import UsersController from "../controllers/users.controller.js";

const router = express.Router();

router
  .route("/")
  .get(UsersController.getUsers)
  .post(UsersController.addUser)
  .put(UsersController.updateUser);
router
  .route("/:id")
  .get(UsersController.getUserById)
  .delete(UsersController.deleteUser);

export default router;
