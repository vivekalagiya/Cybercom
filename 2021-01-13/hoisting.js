// hoisting*****************************

//function
/*
calculateAge(2000);
    
function calculateAge(year)
{
    console.log(2021-year);
}

// retirement(2000);
var retirement = function(year)
{
    console.log(65-(2016-year))
}
retirement(2000);

//variable

console.log(age);
var age=20;
console.log(age);

// scoping*****scope chain**********************************************

var a="vivek";

first();

function first()
{
    var b= "hii";
    console.log(a + b);
    second();

    function second()
    {
        var c= "hey";
        
        console.log(a + b + c);
        third();
        function third()
        {
            d="hello";
            console.log(b);
        }

        
    }
}
*/

// this keyword********************************************************************

console.log(this);
console.log(typeof(window));

calculateAge(2000);
function calculateAge(year)
{
    console.log(2021-year);
    console.log(this);
}

var vivek =
{
    name: 'vivek',
    yearOfBirth: 2000,
    calculateAge: function()
    {
        console.log(this);
        console.log(2021-this.yearOfBirth);
        function innerfunction(){
            console.log(this);
        }
        innerfunction();
    }
}
vivek.calculateAge();
console.log(typeof(vivek));




























