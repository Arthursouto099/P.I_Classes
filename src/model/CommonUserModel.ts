import { AddressModel } from "./AddressModel";


export class CommonUserModel {
    private _id_user: number;
    private _username: string;
    private _email: string;
    private _password: string;
    private _birth: Date;
    private _profile_image: string;
    private _cpf: string;
    private _address: AddressModel | null;
    private _contact: string;
    private _gender: string;
    private _emergency_contact: string;





    constructor(id_user: number, username: string, email: string, password:  string, birth: Date, profile_image: string, cpf: string, address: AddressModel | null, contact: string, gender: string, emergency_contact: string) {
        this._id_user = id_user;
        this._username = username;
        this._email = email;
        this._password = password;
        this._birth = birth;
        this._profile_image = profile_image;
        this._cpf = cpf;
        this._address = address;
        this._contact = contact;
        this._gender = gender;
        this._emergency_contact = emergency_contact;
    }

    public getId_user(): number {
        return this._id_user;
    }

    public setId_user(id_user: number): void {
        this._id_user = id_user;
    }

    public getUsername(): string {
        return this._username;
    }

    public setUsername(username: string): void {
        this._username = username;
    }

    public getEmail(): string {
        return this._email;
    }

    public setEmail(email: string): void {
        this._email = email;
    }

    public getBirth(): Date {
        return this._birth;
    }

    public setBirth(birth: Date): void {
        this._birth = birth;
    }

    public getProfile_image(): string {
        return this._profile_image;
    }

    public setProfile_image(profile_image: string): void {
        this._profile_image = profile_image;
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

    public getAddress(): AddressModel |  null {
        return this._address;
    }

    public setAddress(address: AddressModel): void {
        this._address = address;
    }

    public getContact(): string {
        return this._contact;
    }

    public setContact(contact: string): void {
        this._contact = contact;
    }

    public getGender(): string {
        return this._gender;
    }

    public setGender(gender: string): void {
        this._gender = gender;
    }

    public getEmergency_contact(): string {
        return this._emergency_contact;
    }

    public setEmergency_contact(emergency_contact: string): void {
        this._emergency_contact = emergency_contact;
    }
    
     




    
}