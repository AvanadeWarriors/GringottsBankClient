import { Contact } from './contact.model';

export class Account {
    id: string;
    accountNumber: number;
    customerId: string;
    balance: number;
    enabled: boolean;
    lastIp: string;
    lastUserAgent: string;
    createdTime: Date;
    contacts: [Contact];
}
