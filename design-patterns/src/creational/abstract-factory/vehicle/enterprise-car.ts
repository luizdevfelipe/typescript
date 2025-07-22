import { Customer } from "../customer/customer";
import { Vehicle } from "./vehicle";

export class EnterpriseCar implements Vehicle {
    constructor(public name: string, private readonly customer: Customer) {}

    belongsTo(): void {
        console.log(`${this.name} é de responsabilidade de(a) ${this.customer.name}`);
    }
}