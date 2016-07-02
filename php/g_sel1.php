<?php
	header('Content-Type:application/json');
	$id=$_REQUEST['uid'];
	$sql="SELECT * FROM goods WHERE dno=$id";
	$conn=mysqli_connect('localhost','root','root','car',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row){
		echo json_encode($row);
	}

	
?>
