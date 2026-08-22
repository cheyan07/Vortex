import express from "express";
import { getOtherUsers, getProfile, login, logout, register } from "../controllers/userController.js";
import isAuthenticated from "../middleware/isAuthenticated.js";
const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(logout).get(logout);
router.route("/profile").get(isAuthenticated,getProfile);
router.route("/").get(isAuthenticated,getOtherUsers);

export default router;
