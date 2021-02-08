<?php

$browser = get_browser(null, true);
$browser = strtolower($browser['browser']);
// print_r($browser);

// echo $browser['browser'];

if($browser != 'chrome' ) {
    echo "you're not using Google Chrome. Please do.";
}

?>