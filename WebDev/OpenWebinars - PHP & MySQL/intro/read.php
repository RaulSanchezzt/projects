<pre>
<?php

$conn = mysqli_connect('localhost', 'devuser', 'test1234', 'GALLERY');


$leer = "SELECT id, name, mail, created from users";

$result = mysqli_query($conn, $leer);

$rows = mysqli_fetch_array($result, MYSQLI_BOTH);

// print_r($rows);

do {
    $data[] = $rows;
} while ($rows = mysqli_fetch_array($result, MYSQLI_BOTH));

print_r($data);

mysqli_close($conn);

?>
</pre>