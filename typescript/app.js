"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: 'nagendra',
    age: 33,
    doyouhavecar: true,
    data: 'hello',
};
console.log(user);
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.greet = function () {
        console.log('helo ' + this.name);
    };
    return Person;
}());
var p = new Person("nagendra", 33);
p.greet();
