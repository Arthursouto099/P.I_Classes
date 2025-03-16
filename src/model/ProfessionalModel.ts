import { CommonUserModel } from "./CommonUserModel";
import { Address } from "./AddressModel";


export class ProfessionalModel extends CommonUserModel {
    public id_proffesional: number;
    private _crm: string;
    public specialty: string;
    private _qualification: string;
    public contact_professional: string;
    public workload: number;

    constructor(id_professional: number, crm: string, specialty: string, qualification: string, contact_professional: string, workload: number,  id_user: number, username: string, email: string, password:  string, birth: Date, profileImage: string, cpf: string, address: Address | null, contact: string, gender: string, emergencyContact: string) {
        super(id_user, username, email, password, birth, profileImage, cpf, address, contact, gender, emergencyContact);
        this.id_proffesional = id_professional;
        this._crm = crm;
        this.specialty = specialty;
        this._qualification = qualification;
        this.contact_professional = contact_professional;
        this.workload = workload;
        
    }

    public get crm(): string {
        return this._crm;
    }
    public set crm(value: string) {
        this._crm = value;
    }

    public get qualification(): string {
        return this._qualification;
    }

    public set qualification(qualification: string) {
        this._qualification = qualification;
    }

    


}