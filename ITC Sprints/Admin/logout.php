<?php
session_start();

if (isset($_POST['logout'])) {
    // Destroy session and clear authentication
    session_unset();
    session_destroy();

    // Redirect to admin.html
    header("Location: admin.html");
    exit();
}
?>