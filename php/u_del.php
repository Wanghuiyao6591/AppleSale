<?php
	header('Content-Type:text/html');
	$no=$_REQUEST['no'];
	$sql="DELETE FROM users WHERE dno=$no";
	$conn=mysqli_connect('localhost','root','root','user',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	if($result){
		echo "1";
	}else{
		echo "2";
	}
?>
