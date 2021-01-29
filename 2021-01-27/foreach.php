<html>
<head>
    <title>for each statement</title>
</head>
<body>
</body>
</html>

<?php

$food = array('Healthy'=> array('maggie', 'pizza', 'burger'),
              'Unhealthy'=> array('salad','vegetable','pasta'));

foreach($food as $element => $inner_array){
    echo '<strong>'.$element.'</strong><br>';
    // echo $inner_array.'<br>';
    foreach($inner_array as $item){
        echo $item.'<br>';
    }
}
?>