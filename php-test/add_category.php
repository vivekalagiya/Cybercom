<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Add New Category</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <?php require_once('error.php'); ?>
  <div class="header">
  	<h2>Add New Category</h2>
  </div>
	
  <form name='form' method="post" action="index.php">
    <table>
      
        
  	  	<tr class="input-group">
            <td><label>Title</label></td>
            <td>
                <input type="text" name="title" value="" required>
            </td>
  	    </tr>
        <tr class="input-group">
            <td><label>Content</label></td>
            <td><textarea type="text" name="content" value="" required></textarea>
               
            </td>
  	    </tr>
        <tr class="input-group">
            <td><label>URL</label></td>
            <td><input type="url" name="url" value="" required>
            </td>
        </tr>
        <tr class="input-group">
            <td><label>Meta Title</label></td>
            <td><input type="text" name="meta_title" value="" required>
            </td>
        </tr>
        <tr class="input-group">
            <td><label>Parent Category</label>
            <td><select name="parent_category">
                <option value='education'>education</option>
                <option value='Lifestyle'>Lifestyle</option>
                <option value='Health'>Health</option>
            </select>
  	    </tr>
        
        <tr>
        <td><label>Image</label></td>
        <td><input type='file'  name='img' value='Upload Image'></td>
            <br>
        
        
    </table>
               
             
         <button type="submit" class="btn" name="add_category" >SUBMIT</button>

  </form>
</body>
    
</html>