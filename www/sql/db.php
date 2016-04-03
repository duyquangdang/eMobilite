<?php
    $host = 'mysql-doukceri.alwaysdata.net';
    $db_name = 'doukceri_test';
    $user = 'doukceri';
    $pass = 'doukceri';

    $bdd = new PDO('mysql:host='.$host.';dbname='.$db_name.';charset=utf8', $user, $pass);
?>