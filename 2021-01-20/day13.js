/*
// properties of an object***********************************

//create an object 

var person = {
    firstName: 'vivek',
    lastName: 'alagiya',
    age: 21,
    job: 'developer'
};

console.log(person);

console.log(person.age);

x = person;
console.log(x.age);

person.hobbie = 'playing cricket';
x.yearOfBirth = 2000;
console.log(x.hobbie);
console.log(x);
console.log(person);

console.log(typeof(person));
console.log(typeof(x));


//create an object using new keyword


var person = new Object();

console.log(typeof(person));
person.firstName = 'vivek';
person.lastName = 'alagiya';
person.age = 21;
person.job = 'developer';

console.log(person);

x = person;
x.yearOfBirth = 2000;
delete person.age;  //The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.

console.log(person);
console.log(x)

console.log(person.yearOfBirth);
//access the property of an object
console.log(person.firstName + " is " + person["age"] + " years old.");

// for..in loop

for(a in person) {
    console.log(a);
    console.log(person[a]);
}
console.log(person.a);


console.log(typeof(yearOfBirth));
console.log(typeof(a));
console.log(a in person);

*/

//method and this keyword

var person = {
    firstName: 'vivek',
    lastName: 'alagiya',
    age: 21,
    job: 'developer',
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};
