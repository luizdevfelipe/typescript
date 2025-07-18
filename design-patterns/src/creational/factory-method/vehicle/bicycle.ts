import { Vehicle } from "./vehicle";

export class Bicycle implements Vehicle
{
    constructor(private name: string) {}

    pickUp(customerName: string): void {
        console.log(`${customerName} está buscando ${this.name}`);
    }

    stop(): void {
        console.log(`${this.name} parou.`);
    }
}