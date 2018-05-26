<?php
   //define('BASE_PATH','http://localhost/Angular/webservices');
   define('DB_HOST','localhost');
   define('DB_USER','root');
   define('DB_PASS','');
   define('DB_NAME','anguc');

   $conn = new mysqli(DB_HOST,DB_USER,DB_PASS,DB_NAME);
   if(mysqli_connect_errno())
   {
     echo "Failed to connect".mysqli_connect_errno();
     exit();
   }
 ?>
