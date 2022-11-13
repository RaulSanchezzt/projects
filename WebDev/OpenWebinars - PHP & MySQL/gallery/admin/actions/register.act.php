<?php

include dirname( dirname( dirname( __FILE__))) . "/common/utils.php";
include dirname( dirname( dirname( __FILE__))) . "/common/config.php";
include dirname( dirname( dirname( __FILE__))) . "/common/mysql.php";

// debug($_POST);

// Obtain parameters from the form
$display_name = $_POST['display_name'];
$mail = $_POST['mail'];
$password = sha1($_POST['password']);

// Connect to the database

$connection = Connect($config['database']);

$sql = "INSERT INTO users(name, mail, password) VALUES('".$display_name."', '".$mail."', '".$password."')";

$return = Execute($sql, $connection);

Close($connection);

header("location: /gallery/admin/home.php?page=listado");

?>