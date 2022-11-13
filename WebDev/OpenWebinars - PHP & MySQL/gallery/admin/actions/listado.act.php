<?php

include dirname(dirname(dirname(__FILE__))) . "/common/utils.php";
include dirname(dirname(dirname(__FILE__))) . "/common/config.php";
include dirname(dirname(dirname(__FILE__))) . "/common/mysql.php";

# Connect to the DataBase
$connection = Connect($config['database']);

# Search images
$sql = "SELECT * 
    FROM users AS u INNER JOIN images AS i
    ON u.id = i.user_id
    ORDER BY i.id desc";

$rows = ExecuteQuery($sql, $connection);

// debug($rows);
Close($connection);
