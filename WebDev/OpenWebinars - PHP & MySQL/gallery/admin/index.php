    <?php

    $page = $_GET['page'];

    switch ($page) {
        case 'login':
            include "includes/login.inc.php";
            break;

        case 'register':
            include "includes/register.inc.php";
            break;
    }

    ?>