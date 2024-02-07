import { Router } from "express";
import { authRequired } from "../middleware/auth.middleware.js";
import{createProducts,deleteProducts,getProduct,getProducts,updateProducts,getProductsCategory}from "../controllers/products.controller.js";

const router = Router();

router.get("/listProducts",authRequired, getProducts)
router.get("/listProductsCategory/:id",authRequired, getProductsCategory)
router.post("/createProducts",authRequired, createProducts)
router.get("/listProduct/:id",authRequired,getProduct)
router.delete("/deleteProducts/:id",authRequired, deleteProducts)
router.put("/updateProducts/:id",authRequired, updateProducts)

export default router;