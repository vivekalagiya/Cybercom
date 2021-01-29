<title>string length</title>

<?php

$name = 'Vivek<br>';
$name_length = strlen($name);

// echo $name_length;

for($i = 0; $i<$name_length; $i++){
    echo $i.' '. $name[$i].'<br>';
}

?>