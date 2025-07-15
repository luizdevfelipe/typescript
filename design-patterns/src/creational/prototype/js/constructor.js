function Person (firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}

function SubPerson (firstName, lastName, age) {
    Person.call(this, firstName, lastName, age);
    this.fromSubClass = 'sub';
}

const personPrototype = {
    firstName: 'Luiz',
    lastName: 'Felipe',
    age: 20,

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
};

Person.prototype = Object.create(personPrototype);
Person.prototype.constructor = Person;

SubPerson.prototype = Object.create(Person.prototype);
SubPerson.prototype.constructor = SubPerson;

const person = new Person('John', 'Doe', 30);
console.log(person); // Person instance with properties
console.log(person.fullName()); // function delegated to the prototype

const sub_person = new SubPerson('Jane', 'Doe', 20);
console.log(sub_person); // Person instance with properties
console.log(sub_person.fromSubClass); // property defined in SubPerson
