<?php

include "../common/utils.php";
include "../common/config.php";
include "../common/mysql.php";

# Connect to the DataBase
$connection = Connect($config['database']);

# Search images
$sql = "SELECT * FROM users ORDER BY name ASC";

$rows = ExecuteQuery($sql, $connection);

// debug($rows);

Close($connection);
?>
<script type="text/javascript">
    function delete_post(id) {
        var ok = confirm("Are you sure?");
        if (!ok) {
            return false;
        } else {
            location.href = "delete.php?page=list_users&id=" + id;
        }
    }
</script>
<!-- Page Content -->
<div class="container">
    <div class="row">

        <div class="col-lg-12 text-lett">
            <h2 class="mt-5">Users List</h2>
        </div>

    </div>

    <div class="row cuadro_listado_fotos">
        <div class="col-lg-12">

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Mail</th>
                        <th scope="col">Created</th>
                        <th scope="col">Enabled</th>
                        <th scope="col">Deleted</th>
                    </tr>
                    </tr>
                </thead>
                <tbody>
                    <?php

                    foreach ($rows as $row) {

                        if ($row['enabled'] == "1") {
                            $enabled = "<img src='https://img.icons8.com/ios/50/null/active-state.png' width=20px/>";
                        } else {
                            $enabled = "<img src='https://img.icons8.com/ios/50/null/checked--v1.png' width=20px/>";
                        }


                        echo '
                  <td>' . $row['id'] . '</td>
                  <td>' . $row['name'] . '</td>
                  <td>' . $row['mail'] . '</td>
                  <td>' . date("d/m/Y H:s:i", strtotime($row['created'])) . '</td>
                  <td>' . $enabled . '</td>
                  
                  <td><a href="#" OnClick="delete_post(' . $row['id'] . ')"><img src="https://img.icons8.com/ios/50/null/delete-forever--v1.png" width=20px/></a></td>
                  </tr>
                ';
                    }
                    ?>


                </tbody>
            </table>

        </div>
    </div>

</div>