<?php

include dirname(dirname(dirname(__FILE__))) . "/common/utils.php";
include dirname(dirname(dirname(__FILE__))) . "/common/config.php";
include dirname(dirname(dirname(__FILE__))) . "/common/mysql.php";


$id = $_POST['id'];
$user_id = $_POST['user_id'];
$name = $_POST['name'];
$text = $_POST['text'];

// debug($_POST);

# conectamos con la base de datos
$connection = Connect($config['database']);

if (isset($_POST['enabled'])) {
    $enabled = 1;
} else {
    $enabled = 0;
}

if ($_FILES['image']['name'] != "") {
    move_uploaded_file($_FILES["image"]["tmp_name"], "../../images/" . $_FILES["image"]["name"]);

    $image = $_FILES["image"]["name"];
    $size = $_FILES["image"]["size"];

    $sql = "UPDATE images SET user_id = '".$user_id."', name = '".$name."', text = '". $text."', file = '".$image."', size = '".$size."', enabled = '".$enabled."' WHERE id = '".$id."'";
} else {
    $sql = "UPDATE images SET user_id = '".$user_id."', name = '".$name."', text = '".$text."', enabled = '".$enabled."' WHERE id = '".$id."'";
}
// '".$user_id."'
$return = Execute($sql, $connection);

Close($connection);

header("location: ../home.php?page=listado");
