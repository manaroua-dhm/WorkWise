<?php
    $firstName = $_POST['firstName'];
	$email = $_POST['email'];
	$password = $_POST['password'];
    $conn = new mysqli('localhost','root','','workwise');
    if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into users(firstName, email, password) values(?, ?, ?)");
		$stmt->bind_param("sss", $firstName, $email, $password);
		$execval = $stmt->execute();
		header("Location: ../User/User.html");
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
    }
?>