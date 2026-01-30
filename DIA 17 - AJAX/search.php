<?php
    $name = $_GET['name'];
    $name1 = $name.'%';
    @mysql_connect('localhost', 'root', '');
    @mysql_select_db('ajax');

    $query = "select * from customers where name like '%name1'";
    $query_run = mysql_query($query);

    if (mysql_num_rows($query_run)>0){
        while($row=mysql_fetch_assoc($query_run)){
            echo 'name: '$row['name'].' email: '$row['email'].'<br>';
        }
    }



    ?>