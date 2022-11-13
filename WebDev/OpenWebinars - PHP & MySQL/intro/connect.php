<pre>
<?php

$conn = mysqli_connect('localhost', 'devuser', 'test1234', 'GALLERY');

print_r($conn);

$insert = "INSERT INTO users(name, mail, password, enabled)
    VALUES('pedro', 'pedro@hotmail.es', 'test1234', '1')";

$return = mysqli_query($conn, $insert);

print_r($return);

mysqli_close($conn);
?>
</pre>