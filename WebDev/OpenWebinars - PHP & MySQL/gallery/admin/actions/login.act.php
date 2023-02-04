<?php

include dirname( dirname( dirname( __FILE__))) . "/common/utils.php";
include dirname( dirname( dirname( __FILE__))) . "/common/config.php";
include dirname( dirname( dirname( __FILE__))) . "/common/mysql.php";

// debug($_POST);

$mail=$_POST['mail'];
$password=sha1($_POST['password']);

# Connect to the Database
$connection = Connect($config['database']);

$sql = "SELECT * FROM users WHERE mail = '".$mail."' AND password = '".$password."'";

// debug($sql);

$rows = ExecuteQuery($sql, $connection);

Close($connection);

// debug($rows);

if (empty($rows)) {
    header("location: ../error.php?error=1");
} else {
    session_start();
    $_SESSION['id'] = $rows[0]['id'];
    $_SESSION['mail'] = $rows[0]['mail'];
    $_SESSION['session_id'] = session_id();

    header("location: /gallery/admin/home.php?page=listado");
}
?>