<html>
    <head>
        <title>function with return value</title>
    </head>
    <body>
    </body>
</html>

<?php

//function with return value

function add($num1, $num2){
    $result = $num1 + $num2;
    return $result;
}

function divide($num1, $num2){
    $result = $num1 / $num2;
    return $result;
}

$sum = divide(add(10,10), add(5,5));
echo $sum;

?>

