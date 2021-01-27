<html>
    <head>
        <title>Global variable</title>
    </head>
    <body>
    </body>
</html>

<?php

$user_ip = $_SERVER['REMOTE_ADDR'];

// echo $string = 'Your IP address is: '.$user_ip;

function echo_ip(){
    global $user_ip;
    $string = 'Your IP address is: '.$user_ip;
    echo $string;
}
echo_ip();
?>

