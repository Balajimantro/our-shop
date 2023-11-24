<?php 

	$host = "localhost";
	$user =  "root";
	$password = "";
	$databasename = "registerform";
	
	$con = mysqli_connect($host, $user, $password, $databasename);
	
	if($_SERVER['REQUEST_METHOD'] == 'POST')
	{
		$gmail = $_POST['mail'];
		$pwd= $_POST['Pass'];
		
		if(!empty($gmail) && !empty($pwd) && !is_numeric($gmail))
		{

			$sql = "SELECT * FROM register where email = '$gmail' ";
			$result = mysqli_query($con, $sql);

			if($result)
		 	{
				if($result && mysqli_num_rows($result) > 0)
				{
					$user_data = mysqli_fetch_assoc($result);

						if($user_data['password'] == $pwd)
						{
							header("location: ourshop.html");
							die;
						}
				}
			}
			echo "<script> alert('wrong email or password')</script>";
		}
		else{
			echo "<script> alert('wrong email or password')</script>";
		}
		

	}	mysqli_close($con);
	





 ?>


