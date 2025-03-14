
import { Address } from "../model/AddressModel";
import { CommonUserModel } from "../model/CommonUserModel";
import {Request, Response} from 'express'
import { PatientModel } from "../model/PatientModel";

export class PatientController {

    public static async insertPatient(req: Request, res: Response) {
        try {
           
           const {id_patient, id_user, username, email, password, birth, profileImage, cpf, contact, gender, emergencyContact, id_address, street, number, cep, state, city} = req.body
           console.log(req.body)
           const address = new Address(id_address, street, number, cep, state, city)
           const userCreatedAt = new CommonUserModel(id_user, username, email, password, birth, profileImage, cpf, null, contact, gender, emergencyContact)
           const insert = await userCreatedAt.insert(address)
           
           const insertPatient = await new PatientModel(id_patient, id_user, username, email, password, birth, profileImage, cpf, address, contact, gender, emergencyContact).insertPatient();
    
           if(!insert.ok) {
             throw new Error()
           }

           else if(!insertPatient.ok) {
            throw new Error()
           }
          

          
           res.status(200).json({message: "Paciente criado com sucesso"})
    
    
        }
    
        catch(error) {  
            console.log(error)
            res.status(400).json({message: "error"})
        }
    }


    public static async getAllPatients(req: Request, res: Response) {

        try {
            const rows = await PatientModel.getAllPatients();
            res.status(200).json(rows)
        }

        catch(error) {
            console.log(error)
            res.status(400).json({message: "error"})
        }
        
        
    }
}

