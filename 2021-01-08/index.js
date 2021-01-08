
    console.log('this is javascript');
var firstName='Vivek';
var lastName='Alagiya'
var age='21'
var fullAge = false
var job;
console.log(firstName ,lastName,age,fullAge,job)

// type coercion
var firstName='Vivek';
var lastName='Alagiya';
var age='21';
var job,isMarried;
job='developer';
isMarried=false;
console.log(firstName +' ' + lastName + ' is a ' + age + ' years old. he is a '+job+'. Is he married? '+isMarried);

//variable mutation (use alert and prompt)
/*
age='twenty one';
job='student';
alert(firstName +' ' + lastName + ' is a ' + age + ' years old. he is a '+job+'. Is he married? '+isMarried);
var xender =prompt('what is his xender?');
console.log('xender= '+xender);
*/

//operator

var year,yearVivek,yearDarshil;
now=2021;
ageVivek=21;
ageDarshil=23;

yearVivek=now-ageVivek;
yearDarshil=now-ageDarshil;

console.log(yearVivek);

console.log(now+2);
console.log(now*2);
console.log(now/2);

var vivekOlder=ageVivek>ageDarshil;

console.log("vivek is older? " + vivekOlder);

//typeof operator
console.log(typeof vivekOlder );
console.log(typeof ageDarshil);
console.log(typeof "vivek alagiya");
var x;
console.log(typeof x);


// operator precedence


var now=2021;
var yearVivek=2000;
var fullAge=21;

var isFullAge = now - yearVivek >= fullAge;
console.log(isFullAge);

var x,y;
x = y = (1+2)*3-4;
console.log(x,y);

//more operator

x+=2;   //x=x+2;
console.log(x);
x*=2;  //x=x*2;
console.log(x);
x++;    //x=x+1 , x+=1;
console.log(x);























