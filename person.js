class Person {
    // name: 'John Doe',
    // age: 30,
    constructor(name, age) {
        this.name = name;
        this.age = age

    }
    greeting() {
        console.log(`my name is ${this.name} and I'm ${this.age} years old`);
    }
}

console.log(__filename, __dirname);


module.exports = Person;