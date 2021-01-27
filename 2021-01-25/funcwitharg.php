<html>
    <head>
        <title>function with arguments</title>
    </head>
    <body>
    </body>
</html>

<?php

//function with argument

function add($num1,$num2){
    echo $num1 + $num2.'<br>';
}
add(10,15);

$day = 'monday';
$date = 25;
$year = 2021;

function displayDate($day, $date, $year){
    echo $day.' '.$date.' '.$year;
}

displayDate($day, $date, $year);

?>