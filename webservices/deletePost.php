<?php
  include_once('config.php');
  $id = $_GET['id'];
  if(!empty($id))
  {
    $sql = "DELETE FROM tbl_posts WHERE id = $id";
    if($conn->query($sql) === TRUE)
    {
      $result = array("status" => 1, "msg" => "Post Deleted Successfully.");
    }
    else
    {
      $result = array("status" => 0, "msg" => "Failed to delete post.");
    }
    mysqli_close($conn);
    header('Content-type: application/json');
    echo json_encode($result);
  }
 ?>
