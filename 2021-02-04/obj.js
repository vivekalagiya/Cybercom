
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
console.log(x);

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
    console.log(typeof(a));
    console.log(person[a]);      
    console.log(person.a);
}





console.log(typeof(yearOfBirth));
console.log(typeof(a));
console.log(a in person);



//method and this keyword
// Methods are functions stored as object properties. 

var person = {
    firstName: 'vivek',
    lastName: 'alagiya',
    age: 21,
    job: 'developer',
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
    
};

console.log(person);
console.log(this.firstName);
console.log(person.fullName());
console.log(typeof(person.firstName));


var x = person.fullName();
console.log(x);

var a = 'hello World';
var x = a.toUpperCase();     //in-built method
console.log(a);
console.log(x);



//display properties of object


for(a in person) {
    console.log(a);
    console.log(typeof(a));
    console.log(person[a]);      
    console.log(person.a);
}
   

var arr = Object.values(person);   
console.log(arr);

var str = JSON.stringify(person);
console.log(person);
console.log(str);
console.log(person.firstName);
console.log(str.firstName);

// JSON.stringify will not stringify functions: 
// This can be "fixed" if you convert the functions into strings before stringifying.

person.fullName = person.fullName.toString();

var str = JSON.stringify(person);
console.log(person);
console.log(str);


// It is also possible to stringify JavaScript arrays

var arr = ['vivek', 'darshil', 'nirav', 'mayank'];
var str = JSON.stringify(arr);
console.log(arr);
console.log(typeof(arr));    //object
console.log(str);
console.log(typeof(str));    //string