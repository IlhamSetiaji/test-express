import { Router } from "express";
import TestController from "../controllers/TestController";
import RoleController from "../controllers/RoleController";
import UserController from "../controllers/UserController";
import CreateRoleValidation from '../validations/create-role-validation';

const router = Router();

router.get("/", TestController.test);
router.get("/kwontol", TestController.kwontol);
router.post("/testpost", TestController.testPost);
router.post("/store-role", CreateRoleValidation, RoleController.insertRole);
router.post("/store-user", UserController.insertUser);
router.get("/users", UserController.readUsers);
router.get("/users/:id/find", UserController.findUserById);
router.post("/users/update", UserController.updateUserByEmail);
router.post("/users/delete", UserController.deleteUserByEmail);

export default router;
