<?php



header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$db_conn = mysqli_connect("localhost", "root", "", "codeintern");

// Check connection
if($db_conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
$data = json_decode(file_get_contents("php://input"));

if(isset($data->usertodo)){
		
	$todolist = mysqli_real_escape_string($db_conn, trim($data->usertodo));
	//$useremail = mysqli_real_escape_string($db_conn, trim($data->useremail));
	//$date = date('Y-m-d');

	$add = mysqli_query($db_conn,"insert into todolist (list) values('$todolist')");
	if($add){
		$last_id = mysqli_insert_id($db_conn);
		echo json_encode(["success"=>true,"insertid"=>$last_id]);
		return;
    }else{
        echo json_encode(["success"=>false,"msg"=>"Server Problem. Please Try Again"]);
		return;
    } 

} else{
    echo json_encode(["success"=>false,"msg"=>"Please fill all the required fields!"]);
	return;
}
?> 