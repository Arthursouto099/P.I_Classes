import { CommonUserModel } from "./CommonUserModel";
import { AddressModel } from "./AddressModel";



export class PatientModel extends CommonUserModel {

    private _id_patient: number;
  

    constructor(id_patient: number, id_user: number, username: string, email: string, password:  string, birth: Date, profile_image: string, cpf: string, address: AddressModel | null, contact: string, gender: string, emergency_contact: string) {
        super(id_user, username, email, password, birth, profile_image, cpf, address, contact, gender, emergency_contact);
        this._id_patient = id_patient;
    }

    public get id_patient(): number {
        return this._id_patient;
    }
    public set id_patient(value: number) {
        this._id_patient = value;
    }

    
}