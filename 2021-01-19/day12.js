//Classes********************************************
/*
//ES5

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}
var vivek5 = new Person5('vivek', 2000, 'developer');


// ES6

class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
    static greeting(){
        console.log('hey there!');
    }
}

const vivek6 = new Person6('vivek', 2000, 'developer');
Person6.greeting();
// Person6.calculateAge();
console.log(typeof(Person6.calculateAge));

*/
// Classes and subclasses***************************************

//ES5

var Person5 = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = function(){
    var age = new Date().getFullYear() - this.yearOfBirth;
    console.log(age);
}

var Athlete5 = function(name, yearOfBirth, job, olympicGames, medals){
    Person5.call(this, name,yearOfBirth, job);
    this.olympicGames = olympicGames;
    this.medals = medals;
}

Athlete5.prototype = Object.create(Person5.prototype);

Athlete5.prototype.wonMedal = function(){
    this.medals++;
    console.log(this.medals);
}

var vivekAthlete5 = new Athlete5('vivek', 2000, 'swimmer', 2, 8);
vivekAthlete5.calculateAge();
console.log(new Date().getFullYear());

vivekAthlete5.wonMedal();



// ES6

class Person6{
    constructor(name, yearOfBirth, job){
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;
    }

    calculateAge() {
        var age = new Date().getFullYear() - this.yearOfBirth;
        console.log(age);
    }
}

class Athlete6 extends Person6 {
    constructor(name, yearOfBirth, job, olympicGames, medals) {
        super(name, yearOfBirth, job);
        this.olympicGames = olympicGames;
        this.medals = medals;
    }
    wonMedal() {
        this.medals++;
        console.log(this.medals);
    }
}

const vivekAthlete6 = new Athlete6('vivek', 2000, 'swimmer', 2, 8);
vivekAthlete6.wonMedal();
vivekAthlete6.calculateAge();
