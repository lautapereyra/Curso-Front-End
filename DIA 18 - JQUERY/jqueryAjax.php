<?php
    if(ISSET($_POST['name']))
    {
        if($_POST['name']!="")
        {
            $name= $_POST['name'];
            echo 'hello <b><i>'.$name . '</i></b>';
        } else{
            echo 'Please write your name';
        }
    }
?>