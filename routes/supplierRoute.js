import Express from "express";

import {
  getAllSupplier,
  getSupplierBySupplierId,
} from "../controller/supplierController.js";

const router = Express.Router();

router.get("/", getAllSupplier);
router.get("/:id", getSupplierBySupplierId);

export default router;
