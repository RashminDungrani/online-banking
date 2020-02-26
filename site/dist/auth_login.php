<?php

  include('connect.php');
  session_start();
  // if login session set then update logout_time record in tbl_login_history
  if(isset($_SESSION["s_login"]) && isset($_SESSION["s_account_no"]))
  {
    $logout_time = date("Y-m-d H:i:s");
    $query_for_update_logout = "UPDATE tbl_login_history SET logout_time = '$logout_time' WHERE token_id = (select max(token_id) from tbl_login_history)";
    $result_for_update_logout = mysqli_query($con, $query_for_update_logout) or die('SQL Error :: '.mysqli_error($con));


  }
  session_unset();
  session_destroy();

  
  session_start();
  
  if(isset($_REQUEST['btn_submit']))
  { 

    $username = $_REQUEST["txt_username"];
    $password = $_REQUEST["txt_password"];
    $query = "SELECT username, password FROM tbl_account WHERE username = '$username' AND  password='$password' ";
    $result1 = mysqli_query($con,$query);
    
    if(mysqli_num_rows($result1) > 0 )
    {
        // get account number from userame
        $query_account_no = "SELECT account_no FROM tbl_account WHERE username='$username'";
        $result_account_no = mysqli_query($con, $query_account_no);
        $account_no = mysqli_fetch_array($result_account_no)[0];
        // echo $account_no;
        $_SESSION["s_account_no"] = $account_no;
        $_SESSION["s_login"] = date("Y-m-d H:i:s");
        $Login_time = $_SESSION["s_login"];

        // insert record of login time
        $query_for_login_history = "INSERT INTO tbl_login_history (account_no, login_time) VALUES ($account_no,'$Login_time')";
        $result_for_login_history = mysqli_query($con, $query_for_login_history) or die('SQL Error :: '.mysqli_error($con));
        header("location:http://localhost/online-banking/site/dist/index.php");
        
    }
    else
    {
        // todo : Showing Alertifi if username or password is incorrect
        echo 'The username or password are incorrect!';
        echo "ERROR: Could not able to execute". $result1."  . mysqli_error($con)";
    }
  
}
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Login</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      content="Premium Multipurpose Admin & Dashboard Template"
      name="description"
    />
    <meta content="Themesdesign" name="author" />
    <!-- App favicon -->
    <link rel="shortcut icon" href="assets/images/favicon.ico" />

    <!-- Bootstrap Css -->
    <link
      href="assets/css/bootstrap.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <!-- Icons Css -->
    <link href="assets/css/icons.min.css" rel="stylesheet" type="text/css" />
    <!-- App Css-->
    <link href="assets/css/app.min.css" rel="stylesheet" type="text/css" />
  </head>

  <body class="bg-primary bg-pattern">
    <div class="account-pages my-5 pt-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center mb-5">
              <div clas="row">
                <h5 class="font-size-20 text-white mb-4">
                  <img src="assets/images/favicon.ico" height="24" alt="logo" />
                  Central Bank of India
                </h5>
              </div>
              <h5 class="font-size-16 text-white-50 mb-4">
                A tradition of trust
              </h5>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="row justify-content-center">
          <div class="col-lg-5">
            <div class="card">
              <div class="card-body p-4">
                <div class="p-2">
                  <h5 class="mb-5 text-center">
                    Sign in to continue to Net Banking.
                  </h5>
                  <form class="form-horizontal">
                    <div class="row">
                      <div class="col-md-12">
                        <div class="form-group mb-4">
                          <label for="id">Username</label>
                          <input
                            type="text"
                            class="form-control"
                            id="adminId"
                            name='txt_username'
                            placeholder="Your Username"
                            value=""
                            required

                          />
                        </div>
                        <div class="form-group mb-4">
                          <label for="userpassword">Password</label>
                          <input
                            type="password"
                            class="form-control"
                            id="userpassword"
                            name="txt_password"
                            placeholder="Enter password"
                            required
                          />
                        </div>

                        <div class="row">
                          <div class="col-md-6">
                            <div class="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                class="custom-control-input"
                                id="customControlInline"
                                
                              />
                              <label
                                class="custom-control-label"
                                for="customControlInline"
                                >Remember me</label
                              >
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="text-md-right mt-3 mt-md-0">
                              <a href="auth-recoverpw.html" class="text-muted"
                                ><i class="mdi mdi-lock"></i> Forgot your
                                password?</a
                              >
                            </div>
                          </div>
                        </div>
                        <div class="mt-4">
                          <button
                            class="btn btn-success btn-block waves-effect waves-light"
                            type="submit"
                            name="btn_submit"
                          >
                            Log In
                          </button>
                        </div>
                        <div class="mt-4 text-center">
                          <a href="auth_register.php" class="text-muted"
                            ><i class="mdi mdi-account-circle mr-1"></i> Create
                            an account</a
                          >
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
    </div>
    <!-- end Account pages -->

    <!-- JAVASCRIPT -->
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>

    <script src="assets/js/app.js"></script>
  </body>
</html>
