<pre>
<?php

$conn = mysqli_connect('localhost', 'devuser', 'test1234', 'GALLERY');

// print_r($conn);

$delete = "delete from users where id = 1";

$return = mysqli_query($conn, $delete);

print_r($return);

mysqli_close($conn);
?>
</pre>