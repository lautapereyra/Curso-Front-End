<?php
$name = $_GET['name'];
if ($name != "") {
    echo 'hello ' . $name;
} else {
    echo 'Please write your name';
}

?>
