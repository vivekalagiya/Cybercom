<?php
session_start();

// initializing variables
$username = "";
$email    = "";
$errors = array(); 

// connect to the database
$db = mysqli_connect('localhost', 'root', '', 'php-test');


// REGISTER USER
if (isset($_POST['reg_user'])) {
  // receive all input values from the form
  $prefix = mysqli_real_escape_string($db, $_POST['prefix']);
  $fname = mysqli_real_escape_string($db, $_POST['fname']);
  $lname = mysqli_real_escape_string($db, $_POST['lname']);
  $mobile = mysqli_real_escape_string($db, $_POST['mobile']);
  $email = mysqli_real_escape_string($db, $_POST['email']);
  $password_1 = mysqli_real_escape_string($db, $_POST['password_1']);
  $password_2 = mysqli_real_escape_string($db, $_POST['password_2']);
  $last_login = date('Y-m-d H:i:s');
  $created_At = date('Y-m-d H:i:s');
  $info = mysqli_real_escape_string($db, $_POST['info']);
  $updated_At = date('Y-m-d H:i:s');

  

  if ($password_1 != $password_2) {
	array_push($errors, "The two passwords do not match");
  }

  // a user does not already exist with the same email
  $user_check_query = "SELECT * FROM user WHERE email='$email' LIMIT 1";
  $result = mysqli_query($db, $user_check_query);
  $user = mysqli_fetch_assoc($result);
  
  if ($user) { // if user exists
    if ($user['name'] === $username) {
        alert('user exist');
      array_push($errors, "username already exists");
    }

    if ($user['email'] === $email) {
      array_push($errors, "email already exists");
    }
  }

  // Finally, register user if there are no errors in the form
  if (count($errors) == 0) {
  	$password = md5($password_1);//encrypt the password before saving in the database
    
  	$query = "INSERT INTO user (Prefix, First Name, Last Name,  Mobile, Email, Password Hash,Last Login At, Information, Created At, Updates At) 
  			  VALUES ('$prefix', '$fname', '$lname', '$mobile', '$email', '$password', '$last_login', '$info', '$created_At', '$updated_At' )";
  	mysqli_query($db, $query);
  	$_SESSION['email'] = $email;
  	$_SESSION['success'] = "You are now logged in";
  	header('location: index.php');
  }
}


// LOGIN USER
if (isset($_POST['login_user'])) {
    $email = mysqli_real_escape_string($db, $_POST['email']);
    $password = mysqli_real_escape_string($db, $_POST['password']);
  
    if (empty($email)) {
        array_push($errors, "email is required");
    }
    if (empty($password)) {
        array_push($errors, "Password is required");
    }
  
    if (count($errors) == 0) {
        $password = md5($password);
        $query = "SELECT * FROM user WHERE name='$email'AND password='$password'";
        $results = mysqli_query($db, $query);
        if (mysqli_num_rows($results) == 1) {
          $_SESSION['email'] = $email;
          $_SESSION['success'] = "You are now logged in";
          header('location: index.php');
        }else {
            array_push($errors, "Wrong email/password combination");
        }
    }
  }


  
// add data in blog_post table
if (isset($_POST['add_blog_post'])) {
    // receive all input values from the form
    $title = mysqli_real_escape_string($db, $_POST['title']);
    $content = mysqli_real_escape_string($db, $_POST['content']);
    $publishedAt = mysqli_real_escape_string($db, $_POST['publishedAt']);
    $url = mysqli_real_escape_string($db, $_POST['url']);
    $category = mysqli_real_escape_string($db, $_POST['category']);

    $query = "INSERT INTO blog_post (Title, Content, Url, Published At) 
  			  VALUES ('$title', '$content', '$url', '$publishedAt')";
 
 
// add data in category table
if (isset($_POST['add_category'])) {
    // receive all input values from the form
    $title = mysqli_real_escape_string($db, $_POST['title']);
    $content = mysqli_real_escape_string($db, $_POST['content']);
    $meta_title = mysqli_real_escape_string($db, $_POST['meta_title']);
    $url = mysqli_real_escape_string($db, $_POST['url']);
    $parent_category = mysqli_real_escape_string($db, $_POST['parent_category']);
    $img = mysqli_real_escape_string($db, $_POST['img']);


    $query = "INSERT INTO category (Title, Content, Meta Title, Url,Parent Category ID) 
  			  VALUES ('$title', '$content','$meta_title', '$url', '$parent_category')";
 
  
  ?>