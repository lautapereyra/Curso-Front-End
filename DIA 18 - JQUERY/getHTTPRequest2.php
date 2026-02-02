<?php
$name = $_POST['name'];

if ($_POST['name'] != "") {
    echo 'hello ' . $name;
} else {
    echo 'Please write your name';
}

?>
