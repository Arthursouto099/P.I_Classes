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


     public async insert(address: Address): Promise<{ok: boolean}> {
        try {
            const insertAddress: string = "insert into address (id_address, street, number, cep, state, city) values ($1, $2, $3, $4, $5, $6) RETURNING *"
            const insert: string = "Insert into common_user  (id_user, username, email, password, birth, profile_image, cpf, Fk_address, contact, gender, emergency_contact) values  ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11 ) RETURNING * "
           
            const resultAddress = await pool.query(insertAddress, [address.id_address, address.street, address.number, address.cep, address.state, address.city])
            const result = await pool.query(insert, [this.id_user, this.username, this.email, this.password, this.birth, this.profileImage, this.cpf, address.id_address, this.contact, this.gender, this.emergencyContact])
            return {ok: true};
            
        }
        catch(error) {
            console.log(error)
            return {ok: false}
        }
     }




    
}