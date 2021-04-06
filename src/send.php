<?php

$nombre = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

if($name !== '' ){
    echo json_encode('Datos enviados correctamente');
}else {
    echo json_encode('LLenar todos los campos');
}

// echo json_encode('Hola mundo');