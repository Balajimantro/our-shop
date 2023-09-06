<?php 
	$host = "localhost";
		$user =  "root";
		$password = "";
		$databasename = "registerform";
	
		$conn = mysqli_connect($host, $user, $password, $databasename);
	
	
	if(isset($_POST['submit']))
	{
		$name = $_POST['uname'];
		$email = $_POST['email'];
		$password = $_POST['password'];
		$cpassword = $_POST['cpassword'];

		

		$sql_query = "INSERT INTO register(uname ,email ,password ,cpassword) values ('$name', '$email', '$password', '$cpassword')";

		$result = mysqli_query($conn,$sql_query);
		if ($result){
			echo "<script> alert('successful')</script>";
			{
			header("location: login.html");
			}
		}else{
			echo "<script> alert('failed')</script>";
		}
	}
		
	





 ?>