<?php

include  dirname(dirname(__FILE__)) . "/common/utils.php";
include  dirname(dirname(__FILE__)) . "/common/config.php";
include  dirname(dirname(__FILE__)) . "/common/mysql.php";

$page = $_GET['page'];

# Connect to the DataBase
$connection = Connect($config['database']);

if ($page == 'listado') {
    $sql  = "DELETE FROM images WHERE id = " . $_GET['id'];
} else {
    $sql  = "DELETE FROM users WHERE id = " . $_GET['id'];
}

$return = Execute($sql, $connection);

Close($connection);

header("location: home.php?page=" . $page);
