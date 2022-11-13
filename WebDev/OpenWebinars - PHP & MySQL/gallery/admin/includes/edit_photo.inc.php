<?php

include dirname(dirname(dirname(__FILE__))) . "/common/utils.php";
include dirname(dirname(dirname(__FILE__))) . "/common/config.php";
include dirname(dirname(dirname(__FILE__))) . "/common/mysql.php";

# Connect to the DataBase
$connection = Connect($config['database']);

# Obtenemos el listado de autores
$sql  = "SELECT * FROM users ORDER BY name ASC";

$rows = ExecuteQuery($sql, $connection);

// debug($rows);

# Obtenemos los datos de la foto que buscamos
$sql_foto = "SELECT * FROM images WHERE id = " . $_GET['id'];
$rows_f = ExecuteQuery($sql_foto, $connection);

$rows_photos = $rows_f[0];

if ($rows_photos['enabled'] == 1) {
    $enabled = "checked";
}

// debug($rows_photos)

?>
<div class="container">
    <div class="row">

        <div class="col-lg-12 text-lett">
            <h2 class="mt-5">Edit Photo</h2>
        </div>

    </div>
    <div class="row form_new">
        <div class="col-lg-2 text-left"></div>
        <div class="col-lg-10 text-left">

            <form role="form" action="actions/edit_photo.act.php" method="post" enctype="multipart/form-data">

                <input type="hidden" name="id" id="id" value="<?php echo $rows_photos['id']; ?>">
                <div class="form-group row">
                    <label for="user_id" class="col-lg-2 col-form-label">User</label>

                    <div class="col-lg-4 text-lett">
                        <select class="form-control" name=user_id id=user_id>
                            <?php
                            foreach ($rows as $row) {
                                if ($row[0] == $rows_photos['user_id']) {
                                    echo "<option value= " . $row[0] . " selected>" . $row[1] . "</option>";
                                } else {
                                    echo "<option value= " . $row[0] . ">" . $row[1] . "</option>";
                                }
                            }

                            ?>

                        </select>
                    </div>

                </div>

                <div class="form-group row">
                    <label for="name" class="col-lg-2 col-form-label">Name</label>

                    <div class="col-lg-4 text-lett">
                        <input type="text" class="form-control" id="name" name="name" placeholder="" value="<?php echo $rows_photos['name']; ?>">
                    </div>

                </div>

                <div class="form-group row">
                    <label for="image" class="col-lg-2 col-form-label">Image</label>

                    <div class="col-lg-4 text-lett">
                        <input type="file" class="form-control" id="image" name="image" placeholder="">
                        <?php echo $rows_photos['file']; ?>
                    </div>

                </div>


                <div class="form-group row">
                    <label for="size" class="col-lg-2 col-form-label">Text</label>

                    <div class="col-lg-4 text-lett">
                        <textarea rows="5" cols="60" id="text" name="text"><?php echo $rows_photos['text']; ?></textarea>
                    </div>

                </div>

                <div class="form-group row">
                    <label for="enabled" class="col-lg-2 col-form-label">Enabled</label>

                    <div class="col-lg-3 text-lett">
                        <input type="checkbox" id="enabled" name="enabled" <?php echo $enabled; ?>>
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