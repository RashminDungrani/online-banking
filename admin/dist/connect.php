<?php
  $con = mysqli_connect("localhost","root","","bank_db");

  if ($con)
  {
    // echo "Done";
  }
  else
  {
    echo "Conncetion Not Connect";
  }
?>