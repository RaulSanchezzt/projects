<?php

session_start();

$_SESSION['mi_sesion'] = "VALOR";
$_SESSION['mi_sesion2'] = "VALOR2";

session_id();

?>

<a href="sesiones2.php">Pruebas de Sesiones</a>