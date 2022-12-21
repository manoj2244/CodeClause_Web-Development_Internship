<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET');
header('Access-Control-Request-Headers: Content-Type, x-requested-with');

$con = mysqli_connect('localhost', 'root','','codeintern');
$sql = "SELECT * FROM todolist";
$mysqli = mysqli_query($con,$sql);
$json_data = [];
while($row = mysqli_fetch_assoc($mysqli))
{
    $json_data[] = $row;
}
echo json_encode($json_data);


?>