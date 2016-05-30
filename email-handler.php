<?php
$errors = '';
$myemail = 'm.chapman.home@gmail.com';
if(empty($_POST['subject'])  ||
   empty($_POST['message']) ||
   empty($_POST['name']) ||
   empty($_POST['email']))
{
    $errors .= "\n Error: all fields are required";
}

$subject = $_POST['subject'];
$message = $_POST['message'];
$name = $_POST['name'];
$email_address = $_POST['email'];


if (!preg_match(
"/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/i",
$email_address))
{
    $errors .= "\n Error: Invalid email address";
}

if( empty($errors))
{
	$to = $myemail;
	$email_subject = "New Portfolio Message: $subject";
	$email_body = "You have received a new message. ".
	" Here are the details:\n Name: $name \n Email: $email_address \n Message \n $message";

	$headers = "From: $myemail\n";
	$headers .= "Reply-To: $email_address";

	mail($to,$email_subject,$email_body,$headers);
  echo '<script type="text/javascript">alert("Your message was sent!");</script>';
  header('Location: https://www.madychapman.com/');
	//redirect to the 'thank you' page
	// header('Location: contact-form-thank-you.html');

  $_POST['subject']="";
  $_POST['message']="";
  $_POST['name']="";
  $_POST['email']="";
} else{
  echo $errors;
}
?>
