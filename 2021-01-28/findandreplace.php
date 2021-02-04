<title>Application find and replace</title>

<?php
/*
$find = $_POST['find'];
$replace = $_POST['replace'];
$string = $_POST['string'];
$string_new = str_ireplace($find, $replace, $string);
*/

    $string = $_POST['string'];
    $find = $_POST['find'];
    $replace = $_POST['replace'];

    echo $string_length = strlen($string);

    if(!empty($string) && !empty($find) && !empty($replace)) {
        while($strpos = strpos($string, $find, $offset)){
            $offset = $strpos + $string_length;
            echo $string = substr_replace($string, $replace,$strpos,$string_length);
        }
    } else {
        echo 'please fill in all fields.';
    }


?>


<form action='findandreplace.php' method='POST'>
    <textarea name='string' rows='6' cols='30'></textarea><br><br>

    <label>Search for:</label><br>
    <input type='text' name='find'><br><br>

    <label>Replace with:</label><br>
    <input type='text' name='replace'><br><br>

    <input type='submit' name='Submit' value='find and replace'>
</form>