export interface Prototype {
    clone(): Prototype;
}

export class Address implements Prototype {
    constructor(public street: string, public number: string) { }

    clone(): Address {
        return new Address(this.street, this.number);
    }
}

export class Person implements Prototype {
    public addresses: Address[] = [];

    constructor(public name: string, public age: number) { }

    clone(): Person {
        const newObj = new Person(this.name, this.age);
        newObj.addresses = this.addresses.map(item => item.clone());
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

person.addresses[0].street = "Changed St"; // This will not affect the cloned person

console.log(person);
console.log(clonedPerson);