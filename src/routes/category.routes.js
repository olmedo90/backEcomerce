import { Router } from "express";
import { authRequired } from "../middleware/auth.middleware.js";
import{createCategory,deleteCategory,getCategory,updateCategory}from "../controllers/category.controller.js";

const router = Router();

router.get("/listCategory",authRequired, getCategory)
router.post("/createCategory",authRequired, createCategory)
router.delete("/deleteCategory/:id",authRequired, deleteCategory)
router.put("/putCategory/:id",authRequired, updateCategory)

export default router;