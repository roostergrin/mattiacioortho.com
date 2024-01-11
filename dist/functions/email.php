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
  register_rest_route('rg-mail/v1', 'contactinterview', array(
    'methods' => WP_REST_Server::CREATABLE,
    'callback' => 'rg_serve_route_interview'
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
  $to = 'info@mattiacioortho.com, s.declercq@mattiacioortho.com';
  $subject = 'Website Family Fun Registration Form';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<p><h4><strong>Patient name: </strong></h4>' . $data['fullName'] . '</p>';
  $message .= '<p><h4><strong>DOB:</strong></h4> ' . $data['dob1'] . '</p>';
  $message .= '<p><h4><strong>Lax Program:</strong></h4> ' . $data['yourLaxProgram'] . '</p>';
  $message .= '<p><h4><strong>Parent/guardian name:</strong></h4> ' . $data['yourParentGuardian'] . '</p>';
  $message .= '<p><h4><strong>DOB:</strong></h4> ' . $data['dob2'] . '</p>';
  $message .= '<p><h4><strong>Phone: </strong></h4>' . $data['phone'] . '</p>';
  $message .= '<p><h4><strong>Email: </strong></h4>' . $data['email'] . '</p>';
  $message .= '<p><h4><strong>Date Attending:</strong></h4> ' . $data['selected'] . '</p>';
  $message .= '</body></html>';

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}

// function for handling post request to new api route
function rg_serve_route_interview () {
  require('wp-load.php');

  $data = json_decode(file_get_contents("php://input"), true);
  // $from = 'info@wordpress.com,';
  $to = 'info@mattiacioortho.com';
  $subject = 'Website Exit Interview Form';
  $headers = "MIME-Version: 1.0\r\n";
  $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

  $message = '<html><body>';
  $message .= '<p><h4><strong>Did Mattiacio Orthodontics meet or exceed your expectations? Please explain. </strong></h4>' . $data['message1'] . '</p>';
  $message .= '<p><h4><strong>Was there anything we could have done better to improve your overall experience? </strong></h4>' . $data['message2'] . '</p>';
  $message .= '<p><h4><strong>What was the best part about your experience with Mattiacio Orthodontics? </strong></h4>' . $data['message3'] . '</p>';
  $message .= '<p><h4><strong>Would you recommend Mattiacio Orthodontics to a friend or family member? </strong></h4> ' . $data['message4'] . '</p>';
  $message .= '<p><h4><strong>I would like to make a referral? </strong></h4> ' . $data['radiographs'] . '</p>';  
 
  $message .= '<p><h4><strong>First Name: </strong></h4> ' . $data['firstname'] . '</p>';
  $message .= '<p><h4><strong>Last Name: </strong></h4> ' . $data['lastname'] . '</p>';
  $message .= '<p><h4><strong>Email / Phone # </strong></h4> ' . $data['email'] . '</p>';
  $message .= '<p><h4><strong>Referred by: </strong></h4> ' . $data['referby'] . '</p>';     
  $message .= '</body></html>';

  $sent_message = wp_mail($to, $subject, $message, $headers);

  if ($sent_message) {
    echo 'Email has been received!';
  } else {
    echo 'Could not send email.';
  }
}
