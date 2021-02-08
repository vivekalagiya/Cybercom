<?php

require 'conf.inc.php';

echo $ip_address;

foreach($ip_blocked as $ip) {
    if($ip_address == $ip){
        die('your ip address '.$ip_address.' has been blocked.');
    }
}

?>

<h1>Welcome!</h1>