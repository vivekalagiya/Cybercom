

<form action='$_POST.php' method='POST'>

password:<br><input type='password' name='password'><br><br>
<input type='submit' value='Submit'>

</form>



<?php

if(isset($_POST['password'])) {
    $password = $_POST['password'];

    if(!empty($password)) {
        echo 'password is '.$password;
    } else {
        echo 'please enter password.';
    }

}

?>