<?php
	//header('Content-Type:application/json');
	header('Content-Type:text/plain');
	$id=$_REQUEST['g_uid'];
	$sql="SELECT * FROM goods WHERE dno=$id";
	$conn=mysqli_connect('localhost','root','root','car',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$row=mysqli_fetch_assoc($result);
	if($row){
		//echo json_encode($row);
		echo "编号为$row[dno]的商品名为：$row[name],价格为：$row[price]";
	}else {
		echo '该用户不存在';
	}

	
?>
