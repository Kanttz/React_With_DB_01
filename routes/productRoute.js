import Express from "express";

import {
  getAllProduct,
  getProductByProductId,
} from "../controller/productController.js";

const router = Express.Router();

router.get("/", getAllProduct);
router.get("/:id", getProductByProductId);

export default router;

