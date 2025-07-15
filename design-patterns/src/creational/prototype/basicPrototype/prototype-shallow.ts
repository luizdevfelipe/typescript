export interface Prototype {
    clone(): Prototype;
}

export class Address {
    constructor(public street: string, public number: string) {}
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) {}

    clone(): this {
        const newObj = Object.create(this);
        return newObj;
    }   

    addAddress(address: Address): void {
        this.addresses.push(address);
    }
}

const address = new Address("Main St", "123");

const person = new Person("John", 30);
person.addAddress(address);
const clonedPerson = person.clone();

person.addresses[0].street = "Changed St"; // This will affect the cloned person as well

console.log(clonedPerson);
console.log(clonedPerson.addresses);
