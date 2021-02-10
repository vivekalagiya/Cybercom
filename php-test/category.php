<?php include('server.php') ?>

<!DOCTYPE html>
<html>

<head>
    <title>Blog Category</title>
    <link href="CSS/style.css" rel="stylesheet">

</head>

<body>
    <div class='blog-header'>
    <input type="submit" name="manage_category" value='Manage Category' onclick='category(); '/>
    <input type="submit" name="my_profile" value='My profile' onclick='profile(); '/>
    <input type="submit" name="logout" value='Logout' onclick='logout(); '/>
    </div>


    
    <div class="main-content">
        <h1>Blog Category</h1>
        <input type="submit" name="add_blog_post" value='Add Blog Post' onclick='add_blog_post(); '/>

        <hr>
        <?php
        $query = "SELECT POST ID FROM post_category RIGHT JOIN post_category.POST ID = category.Category ID";
        $rs_result = mysqli_query($db, $query);
        ?>


        

        <div class="message"></div>
        
        <table class="table" id="table1" name="table1">
            <thead class="thead">
                <tr>
                    
                    <th>Post ID</th>
                    <th>Category Name</th>
                    <th>Title</th>
                    <th>Publised Date</th>
                    <th colspan='2'>Actions</th>
                </tr>
            </thead>
            <tbody>
                <?php
                $user;
                if (!$db)
                    die("not connected");
                if (@$result = mysqli_query($db, $query)) {
                    while ($row = mysqli_fetch_array($result)) { ?>
                        <tr>
                            <td><?php echo $row['POST ID']; ?>
                            <td><?php echo $row['Category Name']; ?>
                            <td><?php echo $row['Title']; ?>
                            <td><?php echo $row['Publised Date']; ?>
                            <td>
                                <form method="post">
                                    <input type="text" style="display:none;" name="id" value="<?php echo $row['POST ID']; ?>">
                                    <input type="text" style="display:none;" name="name" value="<?php echo $row['Category Name']; ?>">
                                    <input type="text" style="display:none;" name="title" value="<?php echo $row['Title']; ?>">
                                    <input type="text" style="display:none;" name="email" value="<?php echo $row['Publised Date']; ?>">
                                    
                                    
                                </form>
                            </td>
                            <td>
                                <div>
                                </div>
                            </td>
                        </tr>
                    <?php
                    }
                }
                ?>
            </tbody>
        </table>

        
    </div>
    
</body>


<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
<script src="JS/script.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.19.1/jquery.validate.min.js"></script>

</html>