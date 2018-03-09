<?php
  if(isset($_POST["name"]) && isset($_POST["tel"]) && isset($_POST["email"]) && isset($_POST["message"])) {
    $name = $_POST["name"];
    $tel = $_POST["tel"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "hello@monalighosh.com";
    $from = $email;
    $subject = "Contact enquiry from website";
    $txt = "<b>Name:</b> ".$name."<br/><b>Phone:</b> ".$tel."<br/><b>Email:</b> ".$email."<br/><br/><b>Message:</b> ".$message;
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

    if(mail($to, $subject, $txt, $headers)) {
      echo "Form submitted successfully!";
    } else {
      echo "Failed! Try again!";
    }
  } 
?>