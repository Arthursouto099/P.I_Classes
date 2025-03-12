import { CommonUserModel } from "./CommonUserModel";
import { Address } from "./AddressModel";
import pool from "../config/db";

export class PatientModel extends CommonUserModel {

    public id_patient: number;

    constructor(id_patient: number, id_user: number, username: string, email: string, password:  string, birth: Date, profileImage: string, cpf: string, address: Address | null, contact: string, gender: string, emergencyContact: string) {
        super(id_user, username, email, password, birth, profileImage, cpf, address, contact, gender, emergencyContact);
        this.id_patient = id_patient;
    }

    public   async insertPatient(): Promise<{ok: boolean}> {

        try {
            const insertPatient: string = `insert into patient (id_user) values(${this.id_user})`
            const result = await pool.query(insertPatient);
            return {ok: true};
        }

        catch {
            console.error()
            return {ok: false}
        }
  

    }
}