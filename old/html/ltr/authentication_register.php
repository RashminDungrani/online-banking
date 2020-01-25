<!DOCTYPE html>
<html dir="ltr">


<?php
  include('connect.php');

  if(isset($_REQUEST['btn_submit']))
  {

    $username = $_REQUEST['txt_username'];
    $password = $_REQUEST['txt_password'];
    $full_name = $_REQUEST['txt_fullname'];
    $mobile = $_REQUEST['txt_mobile'];
    $email = $_REQUEST['txt_email'];
    $address = $_REQUEST['txt_address'];
    $pincode = $_REQUEST['txt_pincode'];

    $query = "INSERT INTO tbl_customer (username, password, full_name, mobile, email, address, pincode) VALUES ('$username',    '$password', '$full_name', '$mobile', '$email', '$address', $pincode)";

    $result = mysqli_query($con, $query);

     
     
    if($result)
    {
     session_start();
     $_SESSION["value_username"] = $username;
     header('location:http://localhost/Online_Banking_Website/html/ltr/chooseAccountType.php');
    } 
    else
    {
      echo "ERROR: Could not able to execute $query. " . mysqli_error($con);
    }
}

?>


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
    <title>Matrix Template - The Ultimate Multipurpose admin template</title>
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
        <div class="auth-box bg-dark border-top border-secondary">
          <div>
            <div class="text-center p-t-0 p-b-20">
              <span class="db"
                ><img src="../../assets/images/logo.png" alt="logo"
              /></span>
            </div>
            <!-- Form -->
            <form class="form-horizontal m-t-20">
              <div class="row p-b-30">
                <div class="col-12">
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-success text-white"
                        id="basic-addon1"
                        ><i class="ti-user"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      name = "txt_username"
                      class="form-control form-control-lg"
                      placeholder="Username"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                 
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning text-white"
                        id="basic-addon2"
                        ><i class="ti-lock"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      name = "txt_password"
                      class="form-control form-control-lg"
                      placeholder="Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-info text-white"
                        id="basic-addon2"
                        ><i class="ti-lock"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      name = "txt_rePassword"
                      class="form-control form-control-lg"
                      placeholder="Confirm Password"
                      aria-label="Password"
                      aria-describedby="basic-addon1"
                      required
                    />
                    <!-- new data -->
                  </div>
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-dark text-white"
                        id="basic-addon2"
                        ><i class="ti-direction"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      name = "txt_fullname"
                      class="form-control bg-light form-control-lg"
                      placeholder="Full Name"
                      aria-label="Name"
                      aria-describedby="basic-addon1"
                      required
                    />
                    
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-success text-white"
                        id="basic-addon2"
                        ><i class="ti-mobile"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      name = "txt_mobile"
                      class="form-control form-control-lg"
                      placeholder="Mobile"
                      aria-label="Mobile"
                      aria-describedby="basic-addon1"
                      required
                    />
                    
                  </div>
                   <!-- email -->
                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-warning text-white"
                        id="basic-addon1"
                        ><i class="ti-email"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      name = "txt_email"
                      class="form-control form-control-lg"
                      placeholder="Email Address"
                      aria-label="Email"
                      aria-describedby="basic-addon1"
                      required
                    />
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-info text-white"
                        id="basic-addon2"
                        ><i class="ti-clipboard"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      name = "txt_address"
                      class="form-control form-control-lg"
                      placeholder="Address"
                      aria-label="Address"
                      aria-describedby="basic-addon1"
                      required
                    />
                    
                  </div>

                  <div class="input-group mb-3">
                    <div class="input-group-prepend">
                      <span
                        class="input-group-text bg-danger text-white"
                        id="basic-addon2"
                        ><i class="ti-location-arrow"></i
                      ></span>
                    </div>
                    <input
                      type="text"
                      name = "txt_pincode"
                      class="form-control form-control-lg"
                      placeholder="Pincode"
                      aria-label="Pincode"
                      aria-describedby="basic-addon1"
                      required
                    />
                    
                  </div>

  

                  <!-- End -->
                </div>
              </div>
              <div class="row border-top border-secondary">
                <div class="col-12">
                  <div class="form-group">
                    <div class="p-t-20">
                      <button
                        class="btn btn-block btn-lg btn-info"
                        name = "btn_submit"
                        type="submit"
                      >
                        Sign Up
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a href="authentication_login.php">Already have account</a>

              <!-- <a href="javascript:void(0)" data-toggle="modal" data-target="#add-new-event">Sign Up</a> -->

              
              <!-- Account Type -->
                <div class="modal fade none-border" id="add-new-event">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <!-- <h4 class="modal-title"><strong>Add</strong> a category</h4> -->
                                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div class="modal-body">
                                <form action="authentication_login.php">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <label class="control-label">Your Account Number</label>
                                            <input class="form-control form-white" type="text" name="txt_account_no" />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="control-label">Choose Account Type</label>
                                            <select class="form-control form-white" data-placeholder="Choose a color..." name="txt_account_type">
                                                <option value="saving">Saving</option>
                                                <option value="current">Current</option>
                                            </select>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="modal-footer">
                                <button name="btn_AccountType" type="button" class="btn btn-danger waves-effect waves-light save-category" data-dismiss="modal">Save</button>
                                <button type="button" class="btn btn-secondary waves-effect" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>




            </form>
          </div>
          
        </div>
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
    </script>
  </body>
</html>

