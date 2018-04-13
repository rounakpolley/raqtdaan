<?php
    session_start();
    include("checklogin.php");
    check_login();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Dashboard</title>
    </head>
    <body>
        <h1>This is Dashborad for logged in users that has not yet been designed.</h1>
        <hr />
        <button><a href="logout.php">Logout</a></button>
    </body>
</html>