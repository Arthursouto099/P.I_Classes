export class Address {
    private id_address: number;
    private street: string;
    private number: number;
    private cep: string;
    private state: string;
    private city: string;


    constructor(id_address: number, street: string, number: number, cep: string, state: string, city: string) {
        this.id_address = id_address;
        this.street = street;
        this.number = number;
        this.cep = cep;
        this.state = state;
        this.city = city;
    }
}