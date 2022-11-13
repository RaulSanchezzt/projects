<?php

include "../common/utils.php";
include "../common/config.php";
include "../common/mysql.php";

# Connect to the DataBase
$connection = Connect($config['database']);

$sql  = "SELECT * FROM users ORDER BY name ASC";

$rows = ExecuteQuery($sql, $connection);


?>
<div class="container">
    <div class="row">

        <div class="col-lg-12 text-lett">
            <h2 class="mt-5">New Photo</h2>
        </div>

    </div>
    <div class="row form_new">
        <div class="col-lg-2 text-left"></div>
        <div class="col-lg-10 text-left">

            <form role="form" action="/gallery/admin/actions/new_photo.act.php" method="post" enctype="multipart/form-data">

                <div class="form-group row">
                    <label for="user_id" class="col-lg-2 col-form-label">User</label>

                    <div class="col-lg-4 text-lett">

                        <select class="form-control" name=user_id id=user_id>
                            <?php
                            foreach ($rows as $row) {
                                echo "<option value= " . $row[0] . ">" . $row[1] . "</option>";
                            }

                            ?>

                        </select>

                    </div>

                </div>

                <div class="form-group row">
                    <label for="name" class="col-lg-2 col-form-label">Name</label>

                    <div class="col-lg-4 text-lett">
                        <input type="text" class="form-control" id="name" name="name" placeholder="">
                    </div>

                </div>

                <div class="form-group row">
                    <label for="image" class="col-lg-2 col-form-label">Image</label>

                    <div class="col-lg-4 text-lett">
                        <input type="file" class="form-control" id="image" name="image" placeholder="">
                    </div>

                </div>


                <div class="form-group row">
                    <label for="size" class="col-lg-2 col-form-label">Text</label>

                    <div class="col-lg-4 text-lett">
                        <textarea rows="5" cols="60" id="text" name="text"></textarea>
                    </div>

                </div>

                <div class="form-group row">
                    <label for="enabled" class="col-lg-2 col-form-label">Enabled</label>

                    <div class="col-lg-3 text-lett">
                        <input type="checkbox" id="enabled" name="enabled">
                    </div>

                </div>



                <br><br>
                <button type="submit" class="btn btn-primary">Send</button>

            </form>

            <br><br>
        </div>
        <div class="col-lg-2 text-left"></div>
    </div>

</div>