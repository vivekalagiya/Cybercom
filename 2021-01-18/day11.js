/*

// Arrow functions

const years = [2000, 1998, 1999, 1996];

//ES5
var ages5 = years.map(function(el){
    return 2021 - el;
});
console.log(ages5);

//ES6
let ages6 = years.map(el => 2021 - el);
console.log(ages6);

ages6 = years.map((el, index) => `age element ${index + 1}: ${2021 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
    const now = new Date().getFullYear();
    const age = now - el;
    return `age element ${index + 1}: ${age}.`
});
console.log(ages6);



//Arrow functions 2(lexical this keyword)

//ES5
var box5 = {
    color: 'green',
    position: 3,
    
    clickme: function(){
        var self = this;
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'this is box number ' + self.position + ' and it is ' + self.color;
        alert(str);
            });
    }
}

box5.clickme();

//ES5
var box5 = {
    color: 'green',
    position: 3,
    
    clickme: function(){
        
        document.querySelector('.green').addEventListener('click', function(){
            var str = 'this is box number ' + box5.position + ' and it is ' + box5.color;
        alert(str);
            });
    }
}

box5.clickme();



//ES6
const box6 = {
    color: 'green',
    position: 3,
    clickme: function(){
        document.querySelector('.green').addEventListener('click' ,() => {
            var str = 'this is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickme();


//ES6
const box6 = {
    color: 'green',
    position: 3,
    clickme: () => {
        document.querySelector('.green').addEventListener('click' ,() => {
            var str = 'this is box number ' + this.position + ' and it is ' + this.color;
            alert(str);
        });
    }
}

box6.clickme();



function Person(name){
    this.name = name;
}

//ES5
Person.prototype.myFriends5 = function(friends){
    var arr = friends.map(function(el){
        return this.name + ' is friends with ' + el; 
    }.bind(this));

    console.log(arr);
}

var friends = ['nirav', 'mayank', 'purvesh'];
new Person('vivek').myFriends5(friends);



//ES6
function Person(name){
    this.name = name;
}
Person.prototype.myFriends6 = function(friends){
    var arr = friends.map(el => `${this.name} is friends with ${el}` );

    console.log(arr);
}

var friends = ['nirav', 'mayank', 'purvesh'];
new Person('vivek').myFriends6(friends);



//Destructuring********************************************

//ES5
var vivek = ['vivek', 21];
var name = vivek[0];
var age = vivek[1];


//ES6
const [name,age] = ['vivek', 21];
console.log(name);
console.log(age);

const obj = {
    firstName: 'vivek',
    lastName: 'Alagiya'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);



function calcAgeRetirement(year){
    const age = new Date().getFullYear() - year;
    return[age, 65 - age];

}

const [age2, retirement] = calcAgeRetirement(2000);
console.log(age2);
console.log(retirement);

*/


//Arrays in ES6*****************************************

const boxes = document.querySelectorAll('.box');

//ES5
/*
var boxesArr5 = Array.prototype.slice.call(boxes);
boxesArr5.forEach(function(cur){
    cur.style.backgroundColor = 'orange';
});

*/
//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'orange');
/*
//ES5

for(var i = 0; i < boxesArr5.length; i++){

    if(boxesArr5[i].className === 'box orange'){
        continue;
    }
    boxesArr5[i].textContent = 'I changed to orange!';
}



//ES6

for(const cur of  boxesArr6){
    // if(cur.className === 'box orange')
    if(cur.className.includes('orange'))
    {
        continue;
    }
    cur.textContent = 'I changed to orange!';
}



//ES5

var ages = [13,15,23,17,19];

var full = ages.map(function(cur){
    return cur >= 18;
});
console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]); 


//ES6

console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/






A = { x: 'abc' }
for (x in A){
console.log(A.x);
}
A = {name : 'pritey' }
console.log(A);
