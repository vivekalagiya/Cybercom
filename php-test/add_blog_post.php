<?php include('server.php') ?>
<!DOCTYPE html>
<html>
<head>
  <title>Add Blog Post</title>
  <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
  <?php require_once('error.php'); ?>
  <div class="header">
  	<h2>Add Blog Post</h2>
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
            <td><label>Published At</label></td>
            <td><input type="date" name="publishedAt" value="" required>
            </td>
        </tr>
        <tr class="input-group">
            <td><label>Category</label></td>
            <td>
                <select name='category'>
                    <option name='Lifestyle' value='Lifestyle'>
                    <option name='Health' value='Health'>
                    <option name='Education' value='Education'>
                    <option name='Music' value='Music'>
                </select>

            </td>
        
        </tr>
        <tr>
        <td><label>Image</label></td>
        <td><input type='file'  name='img' value='Upload Image'></td>
            
        <br>
        
    </table>
               
             
         <button type="submit" class="btn" name="add_blog_post" >SUBMIT</button>

  </form>
</body>
    
</html>