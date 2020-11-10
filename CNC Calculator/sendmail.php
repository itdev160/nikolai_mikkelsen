<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="description" content="Bits Blades Belts">
    <!--<meta name="keywords" content="VICOM-128, HTML Contact Form">-->
    <meta name="keywords" content="Zund, Esko, Kongsberg, MCT, Mikkelsen">
    <meta name="author" content="Nikolai Mikkelsen">
    <!--Meta data above-->
    <title>
        Bits Blades Belts
    </title>
    <!--Title-->
    <link rel="stylesheet" href="css/master.css">
    <!--Link to style sheet-->
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="images/favicon.png">

</head>


<body>
    <div class="page">
        <header>
            <div class="img_header">
                <img src="images/headLogo.png" alt="HOME" />
                <h1 class="blink">YOUR TRUSTED CONSUMABLES PROVIDER</h1>
            </div>
        </header>

        <nav id="mobile_menu"></nav>
        <nav id="nav_menu">
            <ul>
                <li>
                    <a href="index.html" title="Home">
                        <img src="images/home.png" alt="HOME" />
                    </a>
                </li>
                 <li class="lastItem">
                    <a>CONTACT US</a>
                    <ul>
                        <li><a href="contact.html">Email Us</a></li>
                        <li><a href="tel:555-555-5555">Call Us</a></li> <!--place holder for phone call-->
                        <li><a href="skype:nikolai.mikkelsen1">Skype Us</a></li> <!--place holder for chat option, will be chat in future rather than skype-->
                    </ul>
                </li>
                <li>
                    <a href="about.html">ABOUT US</a>
                </li>

            </ul>
        </nav>

    <main>

	    <h3 class="title">EMAIL CONFIRMATION</h3>
		<fieldset>
        	<legend>CONTACT INFORMATION</legend>
    		<label for="first_name">First Name:</label>
			<input type="text" name="first_name" id="first_name" value="<?php echo $_REQUEST['first_name'] ?>" disabled><br>
			<label for="last_name">Last Name:</label>
			<input type="text" name="last_name" id="last_name" value="<?php echo $_REQUEST['last_name'] ?>" disabled><br>
            <label for="company">Last Name:</label>
			<input type="text" name="company" id="company" value="<?php echo $_REQUEST['company'] ?>" disabled><br>
        	<label for="email">Email Address:</label>
        	<input type="email" name="email" id="email" value="<?php echo $_REQUEST['email'] ?>" disabled><br>
			<label for="phone">Phone Number:</label>
			<input type="tel" name="phone" id="phone" value="<?php echo $_REQUEST['phone'] ?>" disabled><br>
		</fieldset>
		<fieldset>
    		<legend>Message Information</legend>
			<label for="subject">Subject:</label>
			<input type="text" name="subject" id="subject" value="<?php echo $_REQUEST['subject'] ?>" disabled><br>
			<label for="Message">Message:</label>
			<textarea id="message" name="message" rows="4" disabled><?php echo $_REQUEST['message'] ?></textarea>
		</fieldset>

<!-- This entire script, including the opening and closing ?php tags, can be nested inside of any other tag, such as div or p, to control positioning and formatting of confirmation message spit out by the email script -->
<h2>
<?php
  if (isset($_REQUEST['email'])) { //if "email" variable is filled out, send email
  
  //Set admin email for email to be sent to (use you own MATC email address)
    $admin_email = "mikkelsn@gmatc.matc.edu"; 

  //Set PHP variable equal to information completed on the HTML form
    $email = $_REQUEST['email']; //Request email that user typed on HTML form
    $phone = $_REQUEST['phone']; //Request phone that user typed on HTML form
    $company = $_REQUEST['company']; //Request company that user typed on HTML form
    $subject = $_REQUEST['subject']; //Request subject that user typed on HTML form
    $message = $_REQUEST['message']; //Request message that user typed on HTML form
  //Combine first name and last name, adding a space in between
    $name = $_REQUEST['first_name'] . " " .  $_REQUEST['last_name']; 
            
  //Start building the email body combining multiple values from HTML form    
    $body  = "From: " . $name . "\n"; 
    $body .= "Email: " . $email . "\n"; //Continue the email body
    $body .= "company: " . $company . "\n"; //Continue the email body
    $body .= "Phone: " . $phone . "\n"; //Continue the email body
    $body .= "Message: " . $message; //Continue the email body
  
  //Create the email headers for the from and CC fields of the email     
    $headers = "From: " . $name . " <" . $email . "> \r\n"; //Create email "from"
    $headers .= "CC: " . $name . " <" . $email . ">"; //Send CC to visitor
    
  //Actually send the email from the web server using the PHP mail function
  mail($admin_email, $subject, $body, $headers); 
    
  //Display email confirmation response on the screen
  echo "Thank you for contacting us!"; 
  }
  
  //if "email" variable is not filled out, display an error
  else  { 
     echo "There has been an error!";
        }
?>

</h2>

</main>

        <footer>
            <div class="navbar_footer">
                <a>Copyright 2020 &copy; BitBladesBelts.com. All rights reserved</a>
                <tc><a href="termsConditions.html">TERMS & CONDITIONS</a></tc>
                <a href="https://www.americanexpress.com/" alt="AMEX" target="_blank">
                    <img src="images/amex.png" />
                </a>
                <a href="https://www.visa.com/" alt="VISA" target="_blank">
                    <img src=" images/visa.png" />
                </a>
                <a href="https://www.mastercard.us/" alt="Masercard" target="_blank">
                    <img src=" images/mc.png" />
                </a>
                <a href="https://www.paypal.com/" alt="PayPal" target="_blank">
                    <img src=" images/paypal.jpg" />
                </a>

            </div>
        </footer>
    </div>
</body>
</html>