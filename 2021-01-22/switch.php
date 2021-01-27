<?php
$num = 10;

switch($num){
    case 1:
        echo 'one';
        break;
    case 2:
        echo 'two';
        break;
    case 3:
        echo 'three';
        break;
    default:
        echo 'not found<br>';
        break;
        
}

$day = 'sunday';

switch($day){
    case 'saturday':
    case 'sunday':
        echo 'it\'s weekend';
        break;
    default:
        echo 'not a weekend';
        break;
        
}
?>