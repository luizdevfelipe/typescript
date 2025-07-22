import { Customer } from "../customer/customer";
import { Vehicle } from "./vehicle";

export class IndividualCar implements Vehicle {
    constructor(public name: string, private readonly customer: Customer) {}

    belongsTo(): void {
        console.log(`${this.name} pertence a(o) ${this.customer.name}`);
    }
}