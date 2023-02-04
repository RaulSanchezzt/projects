<?php

include "common/utils.php";
include "common/config.php";
include "common/mysql.php";

/*include "includes/config.php";

  debug ( $config);*/


# conectamos con la base de datos
$connection = Connect($config['database']);

$sql  = "SELECT * FROM images WHERE enabled = 1 ORDER BY id DESC";

$rows = ExecuteQuery($sql, $connection);

Close($connection);


?>
<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gallery</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <style>
        .img-thumbnail {
            width: 400px;
            height: 200px;
        }
    </style>
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="https://img.icons8.com/emoji/48/null/artist-palette.png" /></a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="admin/index.php?page=login">Login</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="admin/index.php?page=register">Register</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="container">
        <h1 class="fw-light text-center text-lg-start mt-4 mb-0">Gallery</h1>

        <hr class="mt-2 mb-5">

        <div class="row text-center text-lg-start">

            <?php
            if (is_iterable($rows)) {
                foreach ($rows as $row) {
                    echo '<div class="col-lg-3 col-md-4 col-6">
                  <a class="d-block mb-4" href="#">
                      <img class="img-fluid img-thumbnail" src="images/' . $row['file'] . '""">
                      
                  </a>' . $row['name'] . '
              </div>';
                }
            }
            ?>

        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
</body>

</html>