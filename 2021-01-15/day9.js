/*
var vivek ={
    name: 'vivek',
    yearOfBirth: 2000,
    job: 'student'
}
var Person =function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge = function(){
    console.log(2021- this.yearOfBirth)
};

Person.prototype.lastName = 'patel';
var vivek = new Person('vivek', 2000, 'student');
var darshil = new Person('darshil', 1998, 'engineer');
var nirav = new Person('nirav', 1999, 'business');

vivek.calculateAge();
darshil.calculateAge();
nirav.calculateAge();

console.log(vivek.lastName);
console.log(darshil.lastName);
console.log(nirav.lastName);


var personProto = {
    calculateAge: function(){
        console.log(2021 - this.yearOfBirth);
    }
};

var darshil = Object.create(personProto);
darshil.name = 'darshil';
darshil.yearOfBirth = 1998;
darshil.job = 'engineer';

var vivek = Object.create(personProto,{
    name : { value: 'vivek'},
    yearOfBirth: { value: 2000},
    job:{ value: 'student'}
})


//primitives vs objects********************8

//primitive

var a = 11;
var b = a;
a=45;

console.log(a);  //a=45
console.log(b);   //b=11

//object

var obj1={
    name: 'vivek',
    age: 21
};
var obj2 = obj1;
obj1.age = 25;
console.log(obj1.age);
console.log(obj2.age);

//Function

var age = 23;
var obj = {
    name: 'darshil',
    city: 'ahmedabad'
};

function change(a,b){
    a=22;
    b.city = 'banglore';
}
change(age, obj);
console.log(age);
console.log(obj.city); 
*/

//passing function as arguments********************************************

var years = [1990,2000,1998,2002,1999];

function arrayCalc(arr,fn){
    var arrRes = [];
    for (var i=0; i< arr.length; i++)
    {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2021 - el;
}

function isFullAge(el){
    return el >= 18;
}

function maxHeartsRates(el){
    if(el >= 18 && el <= 81)
    {
        return Math.round(206.9 - (0.67 * el));
    }
    else
    {
        return -1;
    }
}


var ages = arrayCalc(years,calculateAge);
var fullAges = arrayCalc(ages,isFullAge);
var rates = arrayCalc(ages,maxHeartsRates);

console.log(ages);
console.log(fullAges);
console.log(rates);