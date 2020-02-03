<script type="text/javascript">
  function alertifySuccess()
  {
    alertify.alert("Info", "Registration Success", function() {
      alertify.success("Ok");
      window.location = 'http://localhost/online-banking/site/dist/auth-login.php';

    });
    return false;
  }
</script>

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

   <!-- alertifyjs Css -->
    <link href="assets/libs/alertifyjs/build/css/alertify.min.css" rel="stylesheet" type="text/css" />

    <!-- alertifyjs default themes  Css -->
    <link href="assets/libs/alertifyjs/build/css/themes/default.min.css" rel="stylesheet" type="text/css" />

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
    <div class="account-pages pt-4">
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

        <div class="row">
                            <div class="col-lg-12">
                                <div class="card">
                                    <div class="card-body">
                                        <h4 class="header-title">Register Here</h4>
                                      
                                        
                                        <form class="needs-validation" novalidate>
                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                <label for="validationTooltip01">First name</label>
                                                <input type="text" name="txt_fname" class="form-control" id="validationTooltip01" placeholder="First name" value="" required>
                                                <div class="valid-feedback">
                                                    Looks good!
                                                </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                <label for="validationTooltip02">Last name</label>
                                                <input type="text" name="txt_lname" class="form-control" id="validationTooltip02" placeholder="Last name" value="" required>
                                                <div class="valid-feedback">
                                                    Looks good!
                                                </div>
                                                </div>
                                                
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                <h5 class="font-size-14 mb-3">Gender</h5>
                                                    
                                                    <div class="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" name="txt_gender" id="custominlineRadio1" name="custominlineRadio" class="custom-control-input" checked>
                                                        <label class="custom-control-label" for="custominlineRadio1">Male</label>
                                                    </div>
                                                    <div class="custom-control custom-radio custom-control-inline">
                                                        <input type="radio" name="txt_gender" id="custominlineRadio2" name="custominlineRadio" class="custom-control-input">
                                                        <label class="custom-control-label" for="custominlineRadio2">Female</label>
                                                    </div>
                                                </div>
                                            <div class="col-md-4 mb-3">
                                             <div class="form-group mb-4">
                                                <label>Birth Date</label>
                                                <div class="input-group">
                                                    <input type="text" name="txt_bdate" class="form-control" placeholder="mm/dd/yyyy" data-provide="datepicker" data-date-autoclose="true">
                                                    <div class="input-group-append">
                                                        <span class="input-group-text"><i class="mdi mdi-calendar"></i></span>
                                                    </div>
                                                </div><!-- input-group -->
                                            </div>
                                            </div>
                                               
                                               
                                            </div>

                                            <div class="row">
                                                <div class="col-md-6 mb-3">
                                                <label for="validationTooltip01">Mobile</label>
                                                <input type="text" name="txt_mobile" class="form-control" id="validationTooltip01" placeholder="Mobile" value="" required>
                                                <div class="valid-feedback">
                                                    Looks good!
                                                </div>
                                                </div>
                                                <div class="col-md-6 mb-3">
                                                <label for="validationTooltip02">Email</label>
                                                <input type="text" name="txt_email" class="form-control" id="validationTooltip02" placeholder="Email Id" value="Otto" required>
                                                <div class="valid-feedback">
                                                    Looks good!
                                                </div>
                                                </div>
                                                
                                            </div>


                                            <div class="row">
                                                <div class="col-md-4 mb-3">
                                                <label for="validationTooltip03">Address</label>
                                                <input type="text" name="txt_address" class="form-control" id="validationTooltip03" placeholder="Address" required>
                                                <div class="invalid-feedback">
                                                    Please provide a valid city.
                                                </div>
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                <label for="validationTooltip03">City</label>
                                                <input type="text" name="txt_city" class="form-control" id="validationTooltip03" placeholder="City" required>
                                                <div class="invalid-feedback">
                                                    Please provide a valid city.
                                                </div>
                                                </div>
                                                <div class="col-md-3 mb-3">
                                                <label for="validationTooltip04">State</label>
                                                <input type="text" name="txt_state" class="form-control" id="validationTooltip04" placeholder="State" required>
                                                <div class="invalid-feedback">
                                                    Please provide a valid state.
                                                </div>
                                                </div>
                                                <div class="col-md-2 mb-3">
                                                <label for="validationTooltip04">Zip</label>
                                                <input type="text" name="txt_zip" class="form-control" id="validationTooltip04" placeholder="Zip" required>
                                                <div class="invalid-feedback">
                                                    Please provide a valid state.
                                                </div>
                                                </div>
                                            </div>
                                              <div class="row">
                                                <div class="col-md-4 mb-3">
                                                <label for="validationTooltipUsername">Username</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                    <span class="input-group-text" id="validationTooltipUsernamePrepend">@</span>
                                                    </div>
                                                    <input type="text" name="txt_username" class="form-control" id="validationTooltipUsername" placeholder="Username" aria-describedby="validationTooltipUsernamePrepend" required>
                                                    <div class="invalid-feedback">
                                                    Please choose a unique and valid username.
                                                    </div>
                                                </div>
                                                </div>



                                            
                                                <div class="col-md-4 mb-3">
                                                  <label>Password</label>
                                                    <input type="password" name="txt_password" id="pass2" class="form-control" required
                                                            placeholder="Password"/>
                                                </div>
                                                <div class="col-md-4 mb-3">
                                                  <label>Confirm Password</label>

                                                    <input type="password" name="txt_repassword" class="form-control" required
                                                            data-parsley-equalto="#pass2"
                                                            placeholder="Re-Type Password"/>
                                                </div>
                                            
                                                
                                          
                                            </div>
                                            <div class="row">
                                                <div class="custom-control custom-checkbox mt-3 col-md-12 mb-3">
                                                    <input type="checkbox" class="custom-control-input" id="term-conditionCheck" checked>
                                                    <label class="custom-control-label font-weight-normal" for="term-conditionCheck">I accept <a href="#" class="text-primary">Terms and Conditions</a></label>
                                                </div>
                                            </div>
                                            
                                            
                                            
                                            <button class="btn btn-primary" name="btnSubmit" type="submit">Register</button>
                                            <div class="mt-4 text-right">
                                                    <a href="auth_login.php" class="text-muted"><i class="mdi mdi-account-circle mr-1"></i> Already have an Account</a>
                                                </div>
                                        </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>


   
      </div>
    </div>
    <!-- end Account pages -->

    <!-- JAVASCRIPT -->
    <script src="assets/libs/jquery/jquery.min.js"></script>
    <script src="assets/libs/bootstrap/js/bootstrap.bundle.min.js"></script>
    <script src="assets/libs/metismenu/metisMenu.min.js"></script>
    <script src="assets/libs/simplebar/simplebar.min.js"></script>
    <script src="assets/libs/node-waves/waves.min.js"></script>
    <script src="assets/libs/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>

            <!-- validation init -->
        <script src="assets/js/pages/form-validation.init.js"></script>

 <!-- alertifyjs js -->
    <script src="assets/libs/alertifyjs/build/alertify.min.js"></script>
    <script src="assets/js/pages/alertifyjs.init.js"></script>

  <!-- Showing Admin ID in alert after switch to Admin login page-->
    <!-- <script>
      $("#add").submit(function() {
  alertify.alert("Alert Title", "Alert Message!", function() {
    alertify.success("Ok");
    window.location = '/auth-login.php';
  });
  return false;
});

    </script> -->
    

    <script src="assets/js/app.js"></script>
  </body>
</html>



<?php

  include('connect.php');

  if(isset($_REQUEST['btnSubmit']))
  {
    $first_name = $_REQUEST['txt_fname'];
    $last_name = $_REQUEST['txt_lname'];
    $full_name = $first_name . " " . $last_name;

    $gender = $_REQUEST['txt_gender'];
    $birth_date = $_REQUEST['txt_bdate'];
    $birth_date = date("Y-m-d", strtotime($birth_date) );

    $mobile = $_REQUEST['txt_mobile'];
    $email = $_REQUEST['txt_email'];
    $address = $_REQUEST['txt_address'];
    $city = $_REQUEST['txt_city'];
    $state = $_REQUEST['txt_state'];
    $zip = $_REQUEST['txt_zip'];
    $username = $_REQUEST['txt_username'];
    $password = $_REQUEST['txt_password'];

    
    // Query for inesrt record in tbl_account
    $query = "INSERT INTO tbl_account (username, password) VALUES ('$username', '$password')";
    
    
    $result = mysqli_query($con, $query) or die('SQL Error :: '.mysqli_error($con));
    
    if ($result)
    {
      // query for insert record in tbl_customer
      $query = "INSERT INTO tbl_customer (full_name, gender, birth_date, mobile, email) VALUES ('$full_name', '$gender', '$birth_date','$mobile', '$email')";
  
      $result = mysqli_query($con, $query) or die('SQL Error :: '.mysqli_error($con));

      // After Successfully insert all records show alert Dialog Box that Register Successfully
      if ($result)
      {
        echo '<script type="text/JavaScript">  
        alertifySuccess();
       </script>' 
        ;
        

      }
      else
      {
        print($result);

        echo "ERROR: Could not able to execute $query. " . mysqli_error($con);
      }
      
    } else {
      // todo : Show error -> username already exist
      print("username already Exist");
    }
     
  }
?>