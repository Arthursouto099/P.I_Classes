import express from 'express'
import pool from './config/db.ts';
import "dotenv/config"
import { CommonUserController } from './controllers/CommonUserController.ts';
import { PatientController } from './controllers/PatientController.ts';
import { json } from 'body-parser';

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const port: number = 8000;




app.listen(port, () => {
    console.log("running in port: http://localhost:8000 ")
})

app.get('/', async (req, res) => {
    res.json((await pool.query("Select * from common_user")).rows)
})

app.get("/getAllPatients", async (req, res) => {
    res.json((await pool.query("select patient.id_user as id_patient ,common_user.username, common_user.email, common_user.cpf, common_user.birth, address.state, address.city, address.cep from common_user join patient on patient.id_user = common_user.id_user join address on address.id_address = common_user.fk_address")).rows)
})

app.post("/register/patient", PatientController.insertPatient)
