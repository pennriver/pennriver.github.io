<?php
$errorMSG = "";
// FIRST-NAME
if (empty($_POST["firstname"])) {
    $errorMSG = "First name is required ";
} else {
    $firstname = $_POST["firstname"];
}
// LAST-NAME
if (empty($_POST["lastname"])) {
    $errorMSG = "Last name is required ";
} else {
    $lastname = $_POST["lastname"];
}
// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Email is required ";
} else {
    $email = $_POST["email"];
}
// PACKAGE
if (empty($_POST["package"])) {
    $errorMSG .= "Package is required ";
} else {
    $package = $_POST["package"];
}

$EmailTo = "yourname@domain.com";
$Subject = "New message from your landing page's contact form";
// prepare email body text
$Body = "";
$Body .= "First Name: ";
$Body .= $firstname;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $lastname;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Package: ";
$Body .= $package;
$Body .= "\n";
// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
?>