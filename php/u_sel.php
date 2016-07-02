<?php
	//header('Content-Type:application/json');
	header('Content-Type:text/plain');
	$id=$_REQUEST['uid'];
	$sql="SELECT * FROM users WHERE dno=$id";
	$conn=mysqli_connect('localhost','root','root','user',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row){
		//echo json_encode($row);
		echo "编号为$row[dno]的用户名为：$row[name]";
	}else {
		echo '该用户不存在';
	}

	
?>
