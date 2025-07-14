const personPrototype = {
    firstName: 'Luiz',
    lastName: 'Felipe',
    age: 20,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

const anotherPerson = Object.create(personPrototype);
console.log(anotherPerson); // empty object
console.log(anotherPerson.fullName()); // function delegated to the prototype