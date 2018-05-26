<?php

   include_once('config.php');
   $title = $_POST['title'];
   $description = $_POST['description'];
   $today = date('Y-m-d');
   $query = "INSERT INTO tbl_posts(title, description, published_on) VALUES ('$title','$description','$today')";
   if($conn->query($query))
   {
     echo "Post Added Successfully.";
   }
   else
   {
     echo "Failed to Add Post!.";
   }
 ?>
