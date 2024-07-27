import type { UserController } from "@/controllers/user-controller";
import { Router } from "express";

export function userRoutes(userController: UserController): Router {
  const router = Router();

  router.get("/", userController.getAllUsers);
  router.get("/:id", userController.getUserById);
  router.post("/", userController.createUser);
  router.patch("/:id", userController.updateUser);
  router.delete("/:id", userController.deleteUser);

  return router;
}