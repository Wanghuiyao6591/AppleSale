<?php
	header('Content-Type:text/html');
	$sql="SELECT * FROM goods";
	$conn=mysqli_connect('localhost','root','root','car',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$pro=array();
	while(($row=mysqli_fetch_assoc($result))!=null){
		$pro[]=$row;
	};
	for($i=0;$i<count($pro);$i++){
		$r=$pro[$i];
		echo "<tr>";
		echo "<td class='g_no'>$r[dno]</td>";
		echo "<td><img src='$r[img]'></td>";
		echo "<td>$r[name]</td>";
		echo "<td>$r[price]</td>";
		echo "<td><button class='g_sc'>删除</button></td>";
		echo "<td><button class='g_xg'>修改</button></td>";
		echo "</tr>";
	}
?>
