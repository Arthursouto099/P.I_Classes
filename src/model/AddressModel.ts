export class AddressModel {
    private _id_address: number;
    private _street: string;
    private _number: number;
    private _cep: string;
    private _state: string;
    private _city: string;



    constructor(id_address: number, street: string, number: number, cep: string, state: string, city: string) {
        this._id_address = id_address;
        this._street = street;
        this._number = number;
        this._cep = cep;
        this._state = state;
        this._city = city;
    }

    public getId_address(): number {
        return this._id_address;
    }

    public setId_address(value: number) {
        this._id_address = value;
    }

    public getStreet(): string {
        return this._street;
    }

    public setStreet(value: string) {
        this._street = value;
    }

    public getNumber(): number {
        return this._number;
    }

    public setNumber(value: number) {
        this._number = value;
    }

    public getCep(): string {
        return this._cep;
    }

    public setCep(value: string) {
        this._cep = value;
    }

    public getState(): string {
        return this._state;
    }

    public setState(value: string) {
        this._state = value;
    }

    public getCity(): string {
        return this._city;
    }

    public setCity(value: string) {
        this._city = value;
    }
}