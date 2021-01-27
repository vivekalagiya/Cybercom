<html>
    <head>
        <title>string</title>
    </head>
    <body>
    </body>
</html>

<?php

$string = 'it is a string & this is an example of string.';

$string_word_count = str_word_count($string);
// echo $string_word_count.'<br>';    

$string_word_count = str_word_count($string, 1);
// print_r($string_word_count);

$string_word_count = str_word_count($string, 2);
// print_r($string_word_count);

$string_word_count = str_word_count($string, 2, '&.');
// print_r($string_word_count); 

$string_shuffled = str_shuffle($string);
// echo $string_shuffled;

$half = substr($string_shuffled,0,strlen($string)/2);
// echo $half;

$string_reversed = strrev($string);
// echo $string_reversed;



//similarity between two string(%)

$string_one = 'my name is vivek. i am from ahmedabad.';
$string_two = ' i am from surat. My name is vivek.';

similar_text($string_one, $string_two, $result);
// echo 'similarity = '.$result.'<br>';
// echo strlen($string_one);


//trimmed string
/*

$string = ' This is an string. ';

$string_trimmed = trim($string);
echo $string_trimmed;

$string_trimmed = rtrim($string);
echo $string_trimmed;

$string_trimmed = ltrim($string);
echo $string_trimmed;

echo $string;

*/

$string = 'this is <img src="image.jpg"> a string.';
$string_slashes = htmlentities(addslashes($string));

echo $string_slashes;
echo stripslashes($string_slashes);





?>