<title>Replacing a substring</title>

<?php

$string = 'My name is vivek. i am 21 years old.';
$substring = 'darshil';
$string_replace = 'vivek';
$string_new = substr_replace($string, $substring, strpos($string, $string_replace),5);

echo $string_new;

?>