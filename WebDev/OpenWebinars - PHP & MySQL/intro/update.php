<pre>
<?php

$conn = mysqli_connect('localhost', 'devuser', 'test1234', 'GALLERY');

$update = "UPDATE users SET name = 'alex22' WHERE id = 1";

$return = mysqli_query($conn, $update);

print_r($return);

mysqli_close($conn);

?>
</pre>