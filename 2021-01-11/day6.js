//if else ************************************************
markHeight = 1.5 //meter
markWeight = 74 //kg
johnHeight = 1.6 //meter
johnWeight = 72 //kg

markBMI = markWeight/(markHeight*markHeight);
johnBMI = johnWeight/(johnHeight*johnHeight);
if(markBMI > johnBMI)
{
    console.log("markBMI is higher than john's BMI.");
}
else
{
    console.log("john's BMI is higher then mark's BMI.");
}
//boolean logic **********************************************

var name='vivek';
var age = 21;
if(age<13)
{
    console.log( name + " is a boy.");
}
else if(age>=13 && age<20)
{
    console.log(name + " is a teenager.");
}
else if(age>=20 && age<30)
{
    console.log(name + " is a younger.");
}
else
{
    console.log(name + " is a man.");
}

// ternary operator and switch statement ******************************************

var name="vivek";
var age = 21;

age >= 18 ? console.log(name + ' is drinks beer.') : console.log(name + ' is drinks juice.');
var drink = age >= 18 ? 'beer': 'juice';
console.log(drink)

var job='study';
switch(job)
{
    case 'teacher':
        console.log(name + ' teaches student ');
        break;
    case 'student':
    case 'study':
        console.log(name + ' learn how to code. ');
        break;
    case 'driver':
        console.log(name + ' drive a car');
        break;
    default :
        console.log(name + ' does something else. ');
}

var name='vivek';
var age = 21;
switch(true)
{
case age<13:
    console.log( name + " is a boy.");
    break;
case age>=13 && age<20:
    console.log(name + " is a teenager.");
    break;
case age>=20 && age<30:
    console.log(name + " is a younger.");
    break;
default:
    console.log(name + " is a man.");
}
// truthy and falsy values and equality operators *************************************

//falsy values: undefined,null,0, '',Nan
//truthy values: not falsy values
var height ;

height = 59;
// height = 0 ;
if(height || height == 0)
{
    console.log("variable is defined.");
}
else{
    console.log("variable is undefined.")
}

//equality operator
if(height == '59')
{
    console.log("the operator == does type coersion.");
}

//function****************************************************************************

function calculateAge(birthyear)
{
    return 2021-birthyear;
}

var ageVivek = calculateAge(2000);
var ageDarshil = calculateAge(1998);
var ageMayank = calculateAge(1996);

console.log(ageVivek, ageDarshil, ageMayank)

function yearsuntilretirement(year,name)
{
    var age=calculateAge(year);
    retirement = 65 - age;
    if(retirement>0)
    console.log(name + ' retires in ' + retirement + " years.")
    else
    console.log(name + ' is already retired.')
}

yearsuntilretirement(2000,'vivek');
yearsuntilretirement(1950,'jignesh');


//function statement and expression***************************************************

var age = function(birthyear)
{
    return 2021-birthyear;
}
console.log(age(2000));

//Arrays****************************************************************************

//initialize new array
var names=['nirav', 'yash', 'purvesh'];
var years=new Array(2000,1998,1996);

console.log(names);
console.log(names[2]);
console.log(names.length);
console.log(typeof(names));
console.log(typeof(years));




// mutate array data

names[1]='vivek';
names[names.length]='darshil';
names[6]='nikunj';
console.log(names);

//different data type

var vivek = ['vivek', 'Alagiya', 2000, true,"male"]
vivek.push('blue');
vivek.unshift('Mr.');
console.log(vivek);
vivek.pop();
console.log(vivek);
vivek.shift();
console.log(vivek);

console.log(vivek.indexOf(2000))
console.log(vivek.indexOf(200))

var ismale = vivek.indexOf('male') === -1 ? false : true
if (ismale)
{
    console.log("he is male.");
}
else{
    console.log("she is female.");
}
vivek[10]= 'student';
console.log(vivek)






































