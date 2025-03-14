import { CommonUserModel } from "./CommonUserModel";
import { Address } from "./AddressModel";
import pool from "../config/db";

export class ProfessionalModel extends CommonUserModel {
    public id_proffesional: number;
    public crm: string;
    public specialty: string;
    public qualification: string;
    public contact_professional: string;
    public workload: number;

    constructor(id_professional: number, crm: string, specialty: string, qualification: string, contact_professional: string, workload: number,  id_user: number, username: string, email: string, password:  string, birth: Date, profileImage: string, cpf: string, address: Address | null, contact: string, gender: string, emergencyContact: string) {
        super(id_user, username, email, password, birth, profileImage, cpf, address, contact, gender, emergencyContact);
        this.id_proffesional = id_professional;
        this.crm = crm;
        this.specialty = specialty;
        this.qualification = qualification;
        this.contact_professional = contact_professional;
        this.workload = workload;
        
    }
}