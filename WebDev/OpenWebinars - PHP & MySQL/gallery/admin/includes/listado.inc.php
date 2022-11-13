<script type="text/javascript">
    function delete_post(id) {
        var ok = confirm("Are you sure?");
        if (!ok) {
            return false;
        } else {
            location.href = "delete.php?page=listado&id=" + id;
        }
    }
</script>
<div class="container">
    <div class="row">
        <div class="col-lg-12 test-lett">
            <h2 class="mt-5"> List of Photos</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 test-lett">
            <a class="btn btn-lg btn-warning" href="home.php?page=new">New Photo</a>
        </div>
    </div>
    <div class="row cuadro_listado_fotos">
        <div class="col-lg-12">

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User</th>
                        <th scope="col">File</th>
                        <th scope="col">Created</th>
                        <th scope="col">Enabled</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </tr>
                </thead>
                <tbody>
                    <?php


                    if (!empty($rows)) {


                        foreach ($rows as $row) {


                            if ($row['enabled'] == "0") {
                                $enabled = "<img src='https://img.icons8.com/ios/50/null/active-state.png' width=20px/>";
                            } else {
                                $enabled = "<img src='https://img.icons8.com/ios/50/null/checked--v1.png' width=20px/>";
                            }

                            echo '
                  <td>' . $row['id'] . '</td>
                  <td>' . $row['user_id'] . '</td>
                  <td>' . $row['name'] . '</td>
                  <td>' . date("d/m/Y H:s:i", strtotime($row['created'])) . '</td>
                  <td>' . $enabled . '</td>
                  <td><a href="home.php?page=edit&id=' . $row['id'] . '"><img src="https://img.icons8.com/ios/50/null/pencil--v1.png" width=20px/></a></td>
                  <td><a href="#" OnClick="delete_post(' . $row['id'] . ')"><img src="https://img.icons8.com/ios/50/null/delete-forever--v1.png" width=20px/></a></td>
                  </tr>
                ';
                        }
                    } else {
                        echo "<tr><td colspan=7> No data</td></tr>";
                    }
                    ?>


                </tbody>
            </table>

        </div>
    </div>
</div>