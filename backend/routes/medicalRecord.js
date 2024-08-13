import express from "express";
import {
  createMedicalRecord,
  getAllMedicalRecords,
  getMedicalRecordById,
  updateMedicalRecord,
  deleteMedicalRecord,
} from "../controllers/medicalRecordController.js";

const router = express.Router();

router.post("/", createMedicalRecord);
router.get("/", getAllMedicalRecords);
router.get("/:id", getMedicalRecordById);
router.put("/:id", updateMedicalRecord);
router.delete("/:id", deleteMedicalRecord);

export default router;
