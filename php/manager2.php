<?php
	header('Content-Type:text/html');
	$sql="SELECT * FROM search";
	$conn=mysqli_connect('localhost','root','root','iphone',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$pro=array();
	while(($row=mysqli_fetch_assoc($result))!=null){
		$pro[]=$row;
	};
	for($i=0;$i<count($pro);$i++){
		$r=$pro[$i];
		echo "<tr>";
		echo "<td class='s_uname'>$r[name]</td>";
		echo "<td><button class='s_sc'>删除</button></td>";
		echo "</tr>";
	}
?>
