<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gallery</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
</head>

<body>

    <?php
    include "includes/menu.inc.php";

    $page = $_GET['page'];

    switch ($page) {
        case 'listado':
            include "actions/listado.act.php";
            include "includes/listado.inc.php";
            break;
        case 'list_users':
            include "includes/list_users.inc.php";
            break;
        case 'new':
            include "includes/new_photo.inc.php";
            break;
        case 'edit':
            include "includes/edit_photo.inc.php";
            break;
        default:
            # code...
            break;
    }
    ?>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>

</html>