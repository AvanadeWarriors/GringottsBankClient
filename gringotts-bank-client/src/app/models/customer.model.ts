import { Address } from './address.model';
export class Customer {
    id: string;
    name: string;
    lastName: string;
    birthDate: Date;
    cpf: string;
    password: string;
    genre: string;
    email: string;
    createdTime: Date;
    isAdmin: boolean;
    adresses: Address;
}
