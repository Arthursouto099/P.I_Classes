import { Address } from "./AddressModel";
import pool from "../config/db";

export class CommonUserModel {
    public id_user: number;
    public username: string;
    public email: string;
    private password: string;
    public birth: Date;
    public profileImage: string;
    private cpf: string;
    private address: Address | null;
    public contact: string;
    public gender: string;
    public emergencyContact: string;


    constructor(id_user: number, username: string, email: string, password:  string, birth: Date, profileImage: string, cpf: string, address: Address | null, contact: string, gender: string, emergencyContact: string) {
        this.id_user = id_user;
        this.username = username;
        this.email = email;
        this.password = password;
        this.birth = birth;
        this.profileImage = profileImage;
        this.cpf = cpf;
        this.address = address;
        this.contact = contact;
        this.gender = gender;
        this.emergencyContact = emergencyContact;
    }


     




    
}