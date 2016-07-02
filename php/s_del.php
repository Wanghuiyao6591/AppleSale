<?php
	header('Content-Type:text/html');
	$no=$_REQUEST['name'];
	$sql="DELETE FROM search WHERE name='$no'";
	$conn=mysqli_connect('localhost','root','root','iphone',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	if($result){
		echo "1";
	}else{
		echo "2";
	}
?>
