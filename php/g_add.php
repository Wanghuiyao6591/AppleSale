<?php
	header('Content-Type:text/plain');
	$uname=$_REQUEST['g_uname'];
	$price=$_REQUEST['g_price'];
	$img=$_REQUEST['g_img'];
	$sql="INSERT INTO goods VALUES(NULL,'$uname','$price','$img')";
	$conn=mysqli_connect('localhost','root','root','car',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	if($result){
		echo 'exit';
	}else{
		echo 'no-exit';
	}
?>
