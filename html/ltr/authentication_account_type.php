<?php
  include('connect.php');
  session_start();
  $value_username = $_SESSION["value_username"];
  $query = "SELECT * FROM tbl_customer WHERE username='$value_username'";
  $result1 = mysqli_query($con, $query);
  $row = mysqli_fetch_array($result1);
  $account_no = $row['account_no'];

  if(isset($_REQUEST['btn_AccountType']))
  {
    $account_type = $_REQUEST['txt_account_type'];
    $query = "INSERT INTO tbl_account_type (account_no,account_type) VALUES ($account_no,'$account_type')";
    $result2 = mysqli_query($con, $query);
    session_unset();
    session_destroy();
  
    if ($result2)
    {
      header('location:http://localhost/Online_Banking_Website/html/ltr/authentication_login.php');
    }
    else
    {
      echo "ERROR: Could not able to execute $query. " . mysqli_error($con);
    }
  }
?>

<!DOCTYPE html>
<html dir="ltr">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!-- Favicon icon -->
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="../../assets/images/favicon.png"
    />
    <title>Account Type</title>
    <!-- Custom CSS -->
    <link href="../../dist/css/style.min.css" rel="stylesheet" />
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>

  <body>
    <div class="main-wrapper">
      <!-- ============================================================== -->
      <!-- Preloader - style you can find in spinners.css -->
      <!-- ============================================================== -->
      <div class="preloader">
        <div class="lds-ripple">
          <div class="lds-pos"></div>
          <div class="lds-pos"></div>
        </div>
      </div>
      <!-- ============================================================== -->
      <!-- Preloader - style you can find in spinners.css -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Login box.scss -->
      <!-- ============================================================== -->
      <div
        class="auth-wrapper d-flex no-block justify-content-center align-items-center bg-dark"
      >
        
            <!-- Form -->
            <form>
              
            
                
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <!-- <div class="modal-header"> -->
                                <!-- <h4 class="modal-title"><strong>Add</strong> a category</h4> -->
                                <!-- <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button> -->
                            <!-- </div> -->
                            <div class="modal-body">
                                <form action="authentication_login.php">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="control-label">Your Account Number</label>
                                            <input class="form-control form-white" type="text" name="txt_account_no" value="<?php
                                              echo $account_no;
                                            ?>" disabled/>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="control-label">Choose Account Type</label>
                                            <select class="form-control form-white" name="txt_account_type">
                                                <option value="SAVING">Saving</option>
                                                <option value="CURRENT">Current</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button name="btn_AccountType" type="submit" class="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Goto login Page</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
      </div>
      <!-- ============================================================== -->
      <!-- Login box.scss -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Page wrapper scss in scafholding.scss -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Page wrapper scss in scafholding.scss -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Right Sidebar -->
      <!-- ============================================================== -->
      <!-- ============================================================== -->
      <!-- Right Sidebar -->
      <!-- ============================================================== -->
    </div>
    <!-- ============================================================== -->
   <!-- All Required js -->
    <!-- ============================================================== -->
    <script src="../../assets/libs/jquery/dist/jquery.min.js"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="../../assets/libs/popper.js/dist/umd/popper.min.js"></script>
    <script src="../../assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
    <!-- ============================================================== -->
    <!-- This page plugin js -->
    <!-- ============================================================== -->
    <script>
      $('[data-toggle="tooltip"]').tooltip();
      $(".preloader").fadeOut();
      // ==============================================================
      // Login and Recover Password
      // ==============================================================
      $("#to-recover").on("click", function() {
        $("#loginform").slideUp();
        $("#recoverform").fadeIn();
      });
      $("#to-login").click(function() {
        $("#recoverform").hide();
        $("#loginform").fadeIn();
      });
    </script>
  </body>
</html>
