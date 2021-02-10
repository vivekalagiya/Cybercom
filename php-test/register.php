<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Registration</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <?php require_once('error.php'); ?>
  <div class="header">
  	<h2>REGISTER</h2>
  </div>
	
  <form name='form' method="post" action="index.php">
    <table>
      
        <tr class="input-group">
            <td><label>Prefix</label>
            <td><select name="prefix" id="prefix">
                <option value='Mr.'>Mr.</option>
                <option value='Ms.'>Ms.</option>
                <option value='Mrs.'>Mrs.</option>
            </select>
  	    </tr>
  	  	<tr class="input-group">
            <td><label>First Name</label></td>
            <td>
                <input type="text" name="fname" value="" required>
                <br><small><?php $error_fname ?></small>
            </td>
  	    </tr>
        <tr class="input-group">
            <td><label>Last Name</label></td>
            <td><input type="text" name="lname" value="" required>
                <br><small><?php $error_lname ?></small>
            </td>
  	    </tr>
        <tr class="input-group">
            <td><label>Email</label></td>
            <td><input type="email" name="email" value="" required>
                <br><small><?php $error_email ?></small>
            </td>
        </tr>
        <tr class="input-group">
            <td><label>Mobile Number</label></td>
            <td><input type="tel" name="mobile" value="" required>
                <br><small><?php $error_mobiile ?></small>
            </td>
        </tr>
        <tr class="input-group">
            <td><label>Password</label></td>
            <td><input type="password" name="password_1" required>
            <br><small><?php $error_password ?></small>
        </td>
        </tr>
        <tr class="input-group">
            <td><label>Confirm password</label></td>
            <td><input type="password" name="password_2" required>
            <br><small><?php $error_cpassword ?></small>
        </td>
        </tr>
        <tr class="input-group">
            <td><label>Information</label></td>
            <td><textarea name="info" required></textarea>
        </td>
        </tr>
        
        
    </table>
               
               <input type = "checkbox" name = "checked" value = "1">
               <label><small>Hereby, I Acccept Terms & Conditions.</small></label><br><br>
               <?php if(!isset($_POST['checked'])){ ?>
                <br><small><?php $error_agree ?></small>
               <?php } ?> 
        
         <button type="submit" class="btn" name="reg_user">SUBMIT</button>

  </form>
</body>
    
</html>