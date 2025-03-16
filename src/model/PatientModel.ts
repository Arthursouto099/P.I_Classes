import { CommonUserModel } from "./CommonUserModel";
import { Address } from "./AddressModel";



export class PatientModel extends CommonUserModel {

    public id_patient: number;

    constructor(id_patient: number, id_user: number, username: string, email: string, password:  string, birth: Date, profileImage: string, cpf: string, address: Address | null, contact: string, gender: string, emergencyContact: string) {
        super(id_user, username, email, password, birth, profileImage, cpf, address, contact, gender, emergencyContact);
        this.id_patient = id_patient;
    }

    
}