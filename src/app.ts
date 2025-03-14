import express from 'express'
import pool from './config/db.ts';
import "dotenv/config"


const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())


const port: number = 8000;







app.listen(port, () => {
    console.log("running in port: http://localhost:8000 ")
})


