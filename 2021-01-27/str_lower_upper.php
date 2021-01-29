<title>Lower and Upper case</title>

<?php
/*
$name = 'My Name Is Vivek.';
$name_lower = strtolower($name);
$name_Uppper = strtoupper($name);

echo $name.'<br>';
echo $name_lower.'<br>';
echo $name_Uppper.'<br>';
*/

if(isset($_GET['user_name']) && !empty($_GET['user_name'])){
    $user_name = $_GET['user_name'];
    $user_name_lc = strtolower($user_name);
    if($user_name_lc == 'vivek'){
        echo 'you are the best,'.$user_name;
    }
}
?>
<form action='str_lower_upper.php' method='GET'>
    Name: <input type='text' name='user_name'><br><br>
    <input type='submit' value="Submit">
</form>

