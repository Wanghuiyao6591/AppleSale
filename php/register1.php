<?php
	header('Content-Type:text/plain');
	$uname=$_REQUEST['uname'];
	$sql="SELECT * FROM users WHERE name='$uname'";
	$conn=mysqli_connect('localhost','root','root','user',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row){
		echo 'exist';
	}else {
		echo 'no-exist';
	}
?>
