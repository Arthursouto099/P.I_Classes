
import { Address } from "../model/AddressModel";
import { CommonUserModel } from "../model/CommonUserModel";
import {Request, Response} from 'express'
import { ProfessionalModel } from "../model/ProfessionalModel";

export class ProfessionalController {

    public static async insertCommonUser(req: Request, res: Response) {
        try {
           
           const {id_professional, crm,  specialty, qualification, contact_professional, workload,   id_user, username, email, password, birth, profileImage, cpf, contact, gender, emergencyContact, id_address, street, number, cep, state, city} = req.body
           console.log(req.body)
           const address = new Address(id_address, street, number, cep, state, city)
           const userCreatedAt = new CommonUserModel(id_user, username, email, password, birth, profileImage, cpf, null, contact, gender, emergencyContact)
           const insert = await userCreatedAt.insert(address)

           const insertProfessional = await new ProfessionalModel(id_professional, crm, specialty, qualification, contact_professional, workload,  id_user, username, email, password, birth, profileImage, cpf, address, contact, gender, emergencyContact).insertProffesional()
          

           if(!insert.ok) {
             throw new Error()
           }

           else if(!insertProfessional.ok) {
            throw new Error();
           }

           res.status(200).json({message: "User criado com sucesso"})


        }

        catch(error) {  
            res.status(400).json({message: "deu merda"})
        }
    }
}