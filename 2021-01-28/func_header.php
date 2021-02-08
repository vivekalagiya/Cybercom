<?php ob_start(); ?>
<h1>My Page</h1>

<?php
// ob_end_flush();
$redirect_page = 'anotherpage.php';
$redirect = true;

if($redirect == true) {
    header('Location: '.$redirect_page);

}

// ob_end_clean();
?>
