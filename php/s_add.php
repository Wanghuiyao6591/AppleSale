<?php
	header('Content-Type:text/plain');
	$uname=$_REQUEST["s_uname"];
	$sql="INSERT INTO search VALUES('$uname')";
	$conn=mysqli_connect('localhost','root','root','iphone',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	if($result){
		echo 'exit';
	}else{
		echo 'no-exit';
	}
?>
