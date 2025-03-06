import express from 'express'
import pool from './config/db.ts';
import "dotenv/config"
import { CommonUserController } from './controllers/CommonUserController.ts';

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

app.post("/create", CommonUserController.insertCommonUser)
