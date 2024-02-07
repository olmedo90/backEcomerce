import { Router } from "express";
import {
  login,
  logout,
  register,
 profile
} from "../controllers/auth.controller.js";
import { authRequired } from "../middleware/auth.middleware.js";
// import { validateSchema } from "../middlewares/validator.middleware.js";
// import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", register);
router.post("/login",  login);
router.post("/logout",  logout);
router.get("/profile",authRequired, profile )

export default router;