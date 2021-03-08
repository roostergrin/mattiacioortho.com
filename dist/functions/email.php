<?php

// wp api custom endpoints
add_action('rest_api_init', 'rg_register_routes');

function rg_register_routes () {
  register_rest_route('rg-mail/v1', 'contact', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route'
  ));
  register_rest_route('rg-mail/v1', 'sponsor', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_sponsor'
  ));
  register_rest_route('rg-mail/v1', 'family-fun', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_family_fun'
  ));
}

// function for handling post request to new api route
function rg_serve_route () {
  require('wp-load.php');

  $data = json_decode(file_get_contents("php://input"), true);
  // $from = 'info@wordpress.com,';
  $to = 'info@mattiacioortho.com';
  $subject = 'Website Contact Form';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<p><h4><strong>Form Submission by: </strong></h4>' . $data['fullname'] . '</p>';
  $message .= '<p><h4><strong>Email: </strong></h4>' . $data['email'] . '</p>';
  $message .= '<p><h4><strong>Phone: </strong></h4>' . $data['phone'] . '</p>';
  $message .= '<p><h4><strong>New Patient?:</strong></h4> ' . $data['newPatient'] . '</p>';
  $message .= '<p><h4><strong>Message:</strong></h4> ' . $data['message'] . '</p>';
  $message .= '</body></html>';

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}

// Request Sponsor Form
function rg_serve_route_sponsor () {
  require('wp-load.php');

  $data = json_decode(file_get_contents("php://input"), true);
  // $from = 'info@wordpress.com,';
  $to = 'info@mattiacioortho.com';
  $subject = 'Website Contact Form';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<p><h4><strong>Form Submission by: </strong></h4>' . $data['fullName'] . '</p>';
  $message .= '<p><h4><strong>Patient Name: </strong></h4>' . $data['patientName'] . '</p>';
  $message .= '<p><h4><strong>Contact Info: </strong></h4>' . $data['contactInfo'] . '</p>';
  $message .= '<p><h4><strong>Event:</strong></h4> ' . $data['eventName'] . '</p>';
  $message .= '<p><h4><strong>Date:</strong></h4> ' . $data['date'] . '</p>';
  $message .= '<p><h4><strong>Cause/Nature of org:</strong></h4> ' . $data['cause'] . '</p>';
  $message .= '<p><h4><strong>Website:</strong></h4> ' . $data['website'] . '</p>';
  $message .= '</body></html>';

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}

// The below code was previously for the Dumbo movie night event

// function rg_serve_route_family_fun () {
//   require('wp-load.php');

//   $data = json_decode(file_get_contents("php://input"), true);
//   // $from = 'info@wordpress.com,';
//   $to = 'austin.wiese@roostergrin.com';
//   $subject = 'Website Family Fun Registration Form';
//   $headers = "MIME-Version: 1.0\r\n";
//   $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

//   $message = '<html><body>';
//   $message .= '<p><h4><strong>Form Submission by: </strong></h4>' . $data['fullName'] . '</p>';
//   $message .= '<p><h4><strong>Phone: </strong></h4>' . $data['phone'] . '</p>';
//   $message .= '<p><h4><strong>Email: </strong></h4>' . $data['email'] . '</p>';
//   $message .= '<p><h4><strong>Number of Additional Guests:</strong></h4> ' . $data['howMany'] . '</p>';
//   $message .= '<p><h4><strong>Friend Registration: </strong></h4>' . $data['fullNameFriend'] . '</p>';
//   // $message .= '<p><h4><strong>Gender:</strong></h4> ' . $data['gender'] . '</p>';
//   // $message .= '<p><h4><strong>Date Attending:</strong></h4> ' . $data['selected'] . '</p>';
//   $message .= '</body></html>';

//   $sent_message = wp_mail($to, $subject, $message, $headers);

//   if ($sent_message) {
//     echo 'Email has been received!';
//   } else {
//     echo 'Could not send email.';
//   }
// }

function rg_serve_route_family_fun () {
  require('wp-load.php');

  $data = json_decode(file_get_contents("php://input"), true);
  // $from = 'info@wordpress.com,';
  $to = 'info@mattiacioortho.com';
  $subject = 'Website Family Fun Registration Form';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<p><h4><strong>Form Submission by: </strong></h4>' . $data['fullName'] . '</p>';
  $message .= '<p><h4><strong>Grade:</strong></h4> ' . $data['yourGrade'] . '</p>';
  $message .= '<p><h4><strong>Lax Program:</strong></h4> ' . $data['yourLaxProgram'] . '</p>';
  $message .= '<p><h4><strong>Parent/guardian name:</strong></h4> ' . $data['yourParentGuardian'] . '</p>';
  $message .= '<p><h4><strong>Phone: </strong></h4>' . $data['phone'] . '</p>';
  $message .= '<p><h4><strong>Email: </strong></h4>' . $data['email'] . '</p>';
  $message .= '<p><h4><strong>Gender:</strong></h4> ' . $data['gender'] . '</p>';
  $message .= '<p><h4><strong>Date Attending:</strong></h4> ' . $data['selected'] . '</p>';
  $message .= '</body></html>';

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}
