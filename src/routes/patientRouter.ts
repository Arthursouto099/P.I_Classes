import { Router } from "express";
import { PatientController } from "../controllers/PatientController";

const patientRouter = Router();


patientRouter.post("/register", PatientController.insertPatient)
patientRouter.get("/get/all", PatientController.getAllPatients)



export default patientRouter;