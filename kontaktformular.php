<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "decaryi@web.de"; // E-Mail-Adresse, an die die Formulardaten gesendet werden sollen
  $subject = "Website_Email " . $name;
  $body = "Name: " . $name . "\n" . "E-Mail: " . $email . "\n" . "Nachricht: " . $message;

  // E-Mail senden
  mail($to, $subject, $body);

  // Erfolgsmeldung anzeigen
  echo "Thanks for Request!";
}
?>
