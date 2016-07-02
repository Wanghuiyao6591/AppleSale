<?php
	header('Content-Type:text/html');
	$sql="SELECT * FROM goods";
	$conn=mysqli_connect('localhost','root','root','car',3306);
	mysqli_query($conn,'SET NAMES UTF8');
	$result=mysqli_query($conn,$sql);
	$goods=array();
	while(($row=mysqli_fetch_assoc($result))!=null){
		$goods[]=$row;
	};
	for($i=0;$i<count($goods);$i++){
		$r=$goods[$i];
		echo "<tr>";
		echo "<td>$r[dno]</td>";
		echo "<td><img src='$r[img]'/></td>";
		echo "<td>$r[name]</td>";
		echo "<td>$r[price]</td>";
		echo "<td><button class='cal'>-</button>&nbsp;&nbsp;<span>1</span>&nbsp;&nbsp;<button class='cal'>+</button><b class='del'>X</b></td>";
		echo "<td>&yen;<span>$r[price]</span></td>";
		echo "</tr>";
	}
?>
