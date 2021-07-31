<?php

$nombre = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if($nombre !== '' ){
    echo json_encode('Datos enviados correctamente');
}else {
    echo json_encode('LLenar todos los campos');
}
//* Enviar Correo

$header = $email;

$mensajeCorreo = "Este mensaje fue enviado por: ".$nombre."\r\n";
$mensajeCorreo .= "Correo: " . $email . "\r\n";
$mensajeCorreo .= "Mensaje: " . $message . "\r\n";

$para = "ideasalblanco@gmail.com";
// $para = "jhon1208@gmail.com";

$asunto = "Cotización" . " - " . $nombre;
$respuesta = mail($para, $asunto, utf8_decode($mensajeCorreo), $header);
$respuesta=true;

