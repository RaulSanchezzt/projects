<?php

include dirname( dirname( dirname( __FILE__))) . "/common/utils.php";
include dirname( dirname( dirname( __FILE__))) . "/common/config.php";
include dirname( dirname( dirname( __FILE__))) . "/common/mysql.php";

debug($_POST);
debug($_FILES);

$user_id = $_POST['user_id'];
$name = $_POST['name'];
$text = $_POST['text'];

if (isset($_POST['enabled'])) {
    $enabled = 1;
} else {
    $enabled = 0;
}

move_uploaded_file($_FILES["image"]["tmp_name"], "../../images/" . $_FILES["image"]["name"]);

$file = $_FILES["image"]["name"];
$size = $_FILES["image"]["size"];

$connection = Connect($config['database']);

$sql = "INSERT INTO images(user_id, name, file, size, text, enabled) VALUES('".$user_id."', '".$name."', '".$file."', '".$size."', '".$text."', '".$enabled."')";

/*
INSERT INTO images(user_id, name, file, size, text, enabled) 
VALUES("2", "pepito", "foto.jpg", "1234545", "sdfsrtrtert", "1")
*/

$return = Execute($sql, $connection);

Close($connection);

header("location: /gallery/admin/home.php?page=listado");

?>