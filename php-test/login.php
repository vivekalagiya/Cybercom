<?php include('server.php') ?>
<?php include('error.php') ?>

<!DOCTYPE html>
<html>
<head>
  <title>Login</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <div class="header">
      <img src='logo.png'>
  	<h2>Login</h2>
  </div>
	 
  <form method="post" action="index.php">
  	  	<div class="input-group">
  		<label>Email</label>
  		<input type="text" name="email" required>
  	</div>
  	<div class="input-group">
  		<label>Password</label>
  		<input type="password" name="password" required> 
  	</div>
  	<div class="input-group">
  		<button type="submit" class="btn" name="login_user">LOGIN</button>
        <buttton type='submit' class="btn" onclick=register(); >REGISTER</button>
  	</div>
  	
  </form>
  
</body>
<script src='js/script.js'></script>
</html>