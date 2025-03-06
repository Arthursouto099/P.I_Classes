export class Address {
    public id_address: number;
    public street: string;
    public number: number;
    public cep: string;
    public state: string;
    public city: string;


    constructor(id_address: number, street: string, number: number, cep: string, state: string, city: string) {
        this.id_address = id_address;
        this.street = street;
        this.number = number;
        this.cep = cep;
        this.state = state;
        this.city = city;
    }
}