import { CommonUserModel } from "./CommonUserModel";
import { AddressModel } from "./AddressModel";


export class ProfessionalModel extends CommonUserModel {
    private _id_proffesional: number;
    private _crm: string;
    private _specialty: string;
    private _qualification: string;
    private _contact_professional: string;
    private _workload: number;



    constructor(id_professional: number, crm: string, specialty: string, qualification: string, contact_professional: string, workload: number,  id_user: number, username: string, email: string, password:  string, birth: Date, profileImage: string, cpf: string, address: AddressModel | null, contact: string, gender: string, emergencyContact: string) {
        super(id_user, username, email, password, birth, profileImage, cpf, address, contact, gender, emergencyContact);
        this._id_proffesional = id_professional;
        this._crm = crm;
        this._specialty = specialty;
        this._qualification = qualification;
        this._contact_professional = contact_professional;
        this._workload = workload;
        
    }

    public getId_proffesional(): number {
        return this._id_proffesional;
    }

    public setId_proffesiona(id_professional: number) {
        this._id_proffesional = id_professional;
    }

    public getSpecialty(): string {
        return this._specialty
    }

    public setSpecialty(specialty: string): void {
        this._specialty = specialty;
    }



    public getCrm(): string {
        return this._crm;
    }
    public setCrm(value: string): void {
        this._crm = value;
    }

    public getQualification(): string {
        return this._qualification;
    }

    public setQualification(qualification: string): void {
        this._qualification = qualification;
    }

    
    public getContact_professional(): string {
        return this._contact_professional;
    }

    public setContact_professional(contact_professional: string): void {
        this._contact_professional = contact_professional;
    }

    public getWorkload(): number {
        return this._workload;
    }

    public setWorkload(workload: number): void {
        this._workload = workload;
    }

    


}