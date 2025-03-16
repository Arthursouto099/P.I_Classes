import { Address } from "./AddressModel";


export class CommonUserModel {
    public id_user: number;
    public username: string;
    public email: string;
    private _password: string;
    public birth: Date;
    public profileImage: string;
    private _cpf: string;
    private _address: Address | null;
    public contact: string;
    public gender: string;
    public emergencyContact: string;


    constructor(id_user: number, username: string, email: string, password:  string, birth: Date, profileImage: string, cpf: string, address: Address | null, contact: string, gender: string, emergencyContact: string) {
        this.id_user = id_user;
        this.username = username;
        this.email = email;
        this._password = password;
        this.birth = birth;
        this.profileImage = profileImage;
        this._cpf = cpf;
        this._address = address;
        this.contact = contact;
        this.gender = gender;
        this.emergencyContact = emergencyContact;
    }

    public getPassword(): string{
        return this._password;
    }

    public setPassword(password: string): void {
        this._password = password;
    }


    public getCpf(): string {
        return this._cpf;
    }

    public setCpf(cpf: string): void {
        this._cpf = cpf
    }

    public getAddress(): Address |  null {
        return this._address;
    }

    public setAddress(address: Address): void {
        this._address = address;
    }


     




    
}