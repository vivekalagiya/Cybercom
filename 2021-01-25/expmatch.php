<html>
    <head>
        <title>expmatch</title>
    </head>
    <body>
    </body>
</html>

<?php

$string = 'My name is vivek.';
if(preg_match('/vivek/', $string)){
    echo 'match..';
}else{
    echo 'no match!!!';
}
?>