<title>Timestamps</title>

<?php

echo $time = time();

$actual_time = date('H:i:s',$time);
echo '<br>The current time is '.$actual_time.'<br>';

$actual_date = date('d, m Y',$time);
echo 'The current date is '.$actual_date.'<br>';

$actual_day = date('D, M',$time);
echo 'The current day is '.$actual_day.'<br>';


echo'<br>********Modified*********<br><br>';


echo $time = time();

$actual_time = date('H:i:s',$time-(60*60*24));
echo '<br>The current time is '.$actual_time.'<br>';

$actual_date = date('d, m Y',$time-(60*60*24));
echo 'The current date is '.$actual_date.'<br>';

$actual_day = date('D, M',$time-(60*60*24));
echo 'The current day is '.$actual_day;

echo'<br><br>********Modified by function strtotime()*********<br><br>';

echo $time = time();

$actual_time = date('H:i:s',strtotime('+1 week'));
echo '<br>The current time is '.$actual_time.'<br>';

$actual_date = date('d, m Y',strtotime('-1 year + 2 day - 1 Month'));
echo 'The current date is '.$actual_date.'<br>';

$actual_day = date('D, M',strtotime('-1 day'));
echo 'The current day is '.$actual_day;


?>