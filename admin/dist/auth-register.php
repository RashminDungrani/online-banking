<?php
  include('connect.php');

  if(isset($_REQUEST['btn_submit']))
  {

    $full_name = $_REQUEST['txt_fullname'];
    $mobile = $_REQUEST['txt_mobile'];
    $email = $_REQUEST['txt_email'];
    $password = $_REQUEST['txt_password'];

    $query = "INSERT INTO tbl_admin (fullname, mobile, email, password) VALUES ('$full_name', $mobile, '$email','$password')";

    $result = mysqli_query($con, $query);

     
     
    if($result)
    {
     header('location:http://localhost/Online_Banking/admin/auth-login.php');
    } 
    else
    {
      echo "ERROR: Could not able to execute $query. " . mysqli_error($con);
    }
}

?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Register</title>
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
        <form action="">
          <div class="row justify-content-center">
            <div class="col-lg-5">
              <div class="card">
                <div class="card-body p-4">
                  <div class="p-2">
                    <h5 class="mb-5 text-center">
                      Register Account to Central Bank.
                    </h5>
                    <form class="form-horizontal" action="auth-login.php">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group mb-4">
                            <label for="fullname">Full name</label>
                            <input
                              type="text"
                              class="form-control"
                              name="txt_fullname"
                              placeholder="Enter full name"
                              required
                            />
                          </div>
                          <div class="form-group mb-4">
                            <label for="mobile">Mobile</label>
                            <input
                              type="text"
                              class="form-control"
                              name="txt_mobile"
                              placeholder="Enter Mobile"
                              required
                            />
                          </div>
                          <div class="form-group mb-4">
                            <label for="email">Email</label>
                            <input
                              type="email"
                              class="form-control"
                              name="txt_email"
                              placeholder="Enter email"
                              required
                            />
                          </div>
                          <div class="form-group mb-4">
                            <label for="userpassword">Password</label>
                            <input
                              type="password"
                              class="form-control"
                              name="txt_password"
                              placeholder="Enter password"
                              required
                            />
                          </div>
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              name="term-conditionCheck"
                              required
                            />
                            <label
                              class="custom-control-label font-weight-normal"
                              for="term-conditionCheck"
                              >I accept
                              <a href="#" class="text-primary"
                                >Terms and Conditions</a
                              ></label
                            >
                          </div>
                           <div class="row text-center">
                                            <div class="col-sm-4">
                                                <div class="my-4">
                                                    <h5 class="mb-4">Alert</h5>

                                                    <a href="javascript: void(0);"  id="alert" class="btn btn-primary waves-effect waves-light">Click me</a>
                                                </div>
                                            </div>
</div>
                          <div class="mt-4">
                            <button
                              class="btn btn-success btn-block waves-effect waves-light"
                              type="submit"
                              name="btnSubmit"
                            >
                              Register
                            </button>
                          </div>
                          <div class="mt-4 text-center">
                            <a href="auth-login.html" class="text-muted"
                              ><i class="mdi mdi-account-circle mr-1"></i>
                              Already have account?</a
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
        </form>
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

 <!-- alertifyjs js -->
    <script src="assets/libs/alertifyjs/build/alertify.min.js"></script>
    <script src="assets/js/pages/alertifyjs.init.js"></script>

    <script src="assets/js/app.js"></script>
  </body>
</html>
