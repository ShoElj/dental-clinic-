import express from "express";
import {
  createBillingRecord,
  getAllBillingRecords,
  getBillingRecordById,
  updateBillingRecord,
  deleteBillingRecord,
} from "../controllers/billingController.js";

const router = express.Router();

router.post("/", createBillingRecord);
router.get("/", getAllBillingRecords);
router.get("/:id", getBillingRecordById);
router.put("/:id", updateBillingRecord);
router.delete("/:id", deleteBillingRecord);

export default router;
