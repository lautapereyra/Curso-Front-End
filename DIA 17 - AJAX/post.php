<?php
    $name = $_POST['name'];
    $name1 = $name.'%';
    $email = $name.'@gmail.com';
    @mysql_connect('localhost', 'root', '');
    @mysql_select_db('ajax');

    $query = "insert into customers values('$name', '$email')";
    $query_run = mysql_query($query);

    if ($query_run){
        echo "your information got inserted in our database with Name: ".$name." Email: ".$email;
    } else{
        echo "Oops, some issue is there";
    }
?>