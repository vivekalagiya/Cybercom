<title>Replacing string</title>

<?php


$string = 'My name is vivek, i am 21 years old.';
$find = array('My', 'name', 'is', 'vivek');
$replace = array('vivek', 'there,', 'name  vivek','here');

$new_string = str_replace($find, $replace, $string);

echo $new_string;


?>
