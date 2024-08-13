// backend/index.js
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import "dotenv/config";
import authRoutes from "./routes/authRoutes.js";
import patients from "./routes/patients.js";
import appointments from "./routes/appointments.js";
import medicalRecords from "./routes/medicalRecord.js";
import billing from "./routes/billingRoutes.js";
import users from "./routes/usersRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

// Use routes
app.use("/api/user", users);
app.use("/api", authRoutes);
app.use("/api/patients", patients);
app.use("/api/appointments", appointments);
app.use("/api/medical_record", medicalRecords);
app.use("/api/billing", billing);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
