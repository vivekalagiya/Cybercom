
/*
// function returning function*********************

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
             console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log('what subject do you teach, ' + name + '?');
        }
    } else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('vivek');
designerQuestion('vivek');

interviewQuestion('student')('darshil');



//Immediately Invoked Function Expression(IIFE)**********************

//function declaration

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//function expression

var game = function(score) {
    //var score = Math.random() * 10;
    console.log(score >= 5);
}
game(5);

//IIFE

(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodluck){
    var score = Math.random() * 10;
    console.log(score >= 5 -goodluck);
})(5);



//closures**********************************************

function retirement(retirementAge){
    var a='years left until retirement.';
    return function(yearOfBirth){
        var age = 2021 - yearOfBirth;
        console.log((retirementAge - age) + ' ' + a);
    }
}

var retirementIND = retirement(65);
retirementIND(2000);
retirement(65)(2000);

retirementUS= retirement(66);
retirementUS(2000);


function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
             console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log('what subject do you teach, ' + name + '?');
        }
    } else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('vivek');
designerQuestion('vivek');

interviewQuestion('student')('darshil');


//Bind, call and apply**************************************

var vivek={
    name: 'vivek',
    age:21,
    job: 'engineer',
    presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ' I\'m a '+ this.job + 'and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly'){
          console.log('hey! What\'s up? I\'m ' + this.name + ', I\'m a '+ this. job + ' and I\'m ' + this.age + ' years old. Have a nice' + timeOfDay + '.');
        }
    }
}
vivek.presentation('formal','morning');

var darshil = {
    name: 'darshil',
    age: 23,
    job: 'designer'
}

vivek.presentation.call(darshil,'friendly','afternoon');

vivek.presentation.apply(darshil,['friendly', 'afternoon']);

var vivekFriendly = vivek.presentation.bind(vivek,'friendly');

vivekFriendly('morning');
vivekFriendly('night');

var darshilFormal = vivek.presentation.bind(darshil, 'formal');
darshilFormal('afternoon'); 


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

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


// let and const*****************************

//ES5
var name5 = 'vivek patel';
var age5 = 20;
name5 = 'vivek alagiya';
console.log(name5);

//ES6
const name6 = 'vivek patel';
let age6 = 20;
name6 = 'vivek alagiya';
console.log6);




//ES5
function driversLicence5(passedTest){
    if(passedTest){
        console.log(firstName);
        var firstName = 'vivek';
        var yearOfBirth = 2000;
    }
    console.log(firstName + ' born in ' + yearOfBirth + ',is now officially allowed to drive a car.');

}

driversLicence5(true);

//ES6
function driversLicence6(passedTest){
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 2000;
    if(passedTest){
        firstName = 'vivek';
        
    }
    console.log(firstName + ' born in ' + yearOfBirth + ',is now officially allowed to drive a car.');

}

driversLicence6(true);


let i = 20;

for(let i = 0;i < 5; i++){
    console.log(i);
}

console.log(i);


var i = 20;

for(var i = 0;i < 5; i++){
    console.log(i);
}

console.log(i);

*/

//Blocks and IIFEs************************************

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);

//ES5
(function(){
    var c = 3;
})();

//console.log(c);


//string in ES6**********************************8

let firstName = 'vivek';
let lastName = 'alagiya';
const yearOfBirth = 2000;

function calcAge(year){
    return 2021-year;
}

//ES5
console.log('this is' + firstName + ' '  + lastName + '. He was borm in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + 'years old.');

//ES6
console.log(`this is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('ek'));
console.log(n.includes('al'));
console.log(`${firstName} `.repeat(5));
=======
/*
// function returning function*********************

function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
             console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log('what subject do you teach, ' + name + '?');
        }
    } else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('vivek');
designerQuestion('vivek');

interviewQuestion('student')('darshil');



//Immediately Invoked Function Expression(IIFE)**********************

//function declaration

function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();

//function expression

var game = function(score) {
    //var score = Math.random() * 10;
    console.log(score >= 5);
}
game(5);

//IIFE

(function (){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();

(function (goodluck){
    var score = Math.random() * 10;
    console.log(score >= 5 -goodluck);
})(5);



//closures**********************************************

function retirement(retirementAge){
    var a='years left until retirement.';
    return function(yearOfBirth){
        var age = 2021 - yearOfBirth;
        console.log((retirementAge - age) + ' ' + a);
    }
}

var retirementIND = retirement(65);
retirementIND(2000);
retirement(65)(2000);

retirementUS= retirement(66);
retirementUS(2000);


function interviewQuestion(job){
    if(job === 'designer'){
        return function(name){
             console.log(name + ', can you please explain what UX design is?');
        }
    } else if(job === 'teacher'){
        return function(name){
            console.log('what subject do you teach, ' + name + '?');
        }
    } else{
        return function(name){
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('vivek');
designerQuestion('vivek');

interviewQuestion('student')('darshil');


//Bind, call and apply**************************************

var vivek={
    name: 'vivek',
    age:21,
    job: 'engineer',
    presentation: function(style,timeOfDay){
        if(style === 'formal'){
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ' I\'m a '+ this.job + 'and I\'m ' + this.age + ' years old.');
        } else if(style === 'friendly'){
          console.log('hey! What\'s up? I\'m ' + this.name + ', I\'m a '+ this. job + ' and I\'m ' + this.age + ' years old. Have a nice' + timeOfDay + '.');
        }
    }
}
vivek.presentation('formal','morning');

var darshil = {
    name: 'darshil',
    age: 23,
    job: 'designer'
}

vivek.presentation.call(darshil,'friendly','afternoon');

vivek.presentation.apply(darshil,['friendly', 'afternoon']);

var vivekFriendly = vivek.presentation.bind(vivek,'friendly');

vivekFriendly('morning');
vivekFriendly('night');

var darshilFormal = vivek.presentation.bind(darshil, 'formal');
darshilFormal('afternoon'); 


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

function isFullAge(limit, el){
    return el >= limit;
}

var ages = arrayCalc(years,calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);


// let and const*****************************

//ES5
var name5 = 'vivek patel';
var age5 = 20;
name5 = 'vivek alagiya';
console.log(name5);

//ES6
const name6 = 'vivek patel';
let age6 = 20;
name6 = 'vivek alagiya';
console.log6);




//ES5
function driversLicence5(passedTest){
    if(passedTest){
        console.log(firstName);
        var firstName = 'vivek';
        var yearOfBirth = 2000;
    }
    console.log(firstName + ' born in ' + yearOfBirth + ',is now officially allowed to drive a car.');

}

driversLicence5(true);

//ES6
function driversLicence6(passedTest){
    // console.log(firstName);
    let firstName;
    const yearOfBirth = 2000;
    if(passedTest){
        firstName = 'vivek';
        
    }
    console.log(firstName + ' born in ' + yearOfBirth + ',is now officially allowed to drive a car.');

}

driversLicence6(true);


let i = 20;

for(let i = 0;i < 5; i++){
    console.log(i);
}

console.log(i);


var i = 20;

for(var i = 0;i < 5; i++){
    console.log(i);
}

console.log(i);

*/

//Blocks and IIFEs************************************

//ES6
{
    const a = 1;
    let b = 2;
    var c = 3;
}

//console.log(a + b);
console.log(c);

//ES5
(function(){
    var c = 3;
})();

//console.log(c);


//string in ES6**********************************8

let firstName = 'vivek';
let lastName = 'alagiya';
const yearOfBirth = 2000;

function calcAge(year){
    return 2021-year;
}

//ES5
console.log('this is' + firstName + ' '  + lastName + '. He was borm in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + 'years old.');

//ES6
console.log(`this is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j'));
console.log(n.endsWith('ek'));
console.log(n.includes('al'));
console.log(`${firstName} `.repeat(5));

