<title>String Position</title>

<?php

$offset = 0;
$find= 'str';
$find_length = strlen($find);

$string = 'this is a string, and it is an example.';


while($string_position = strpos($string, $find, $offset)){
    echo $find.' found at '.$string_position.'<br>';
    $offset = $string_position + $find_length;
    
}



?>