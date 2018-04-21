<?php
    session_start();
    include("checklogin.php");
    check_login();
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Raqtdaan Dashborad</title>
        <link href="favicon.ico" rel="shortcut icon" type="image/x-icon">
    </head>
    <body>
        <h1>This is Dashborad for logged in users that has not yet been designed.</h1>
        <hr />
        <a href="logout.php">Logout</a>
    </body>
</html>