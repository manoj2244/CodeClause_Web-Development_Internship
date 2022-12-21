<?php
session_start();
$con = mysqli_connect('localhost','root','','codeintern');
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$desc = $_POST['desc'];
$num = $_POST['number'];
$captcha = $_POST['captcha'];
if($_SESSION['code']==$captcha){
    $sql = "insert into form_captch(fname,lname,email,num,descs) values('$fname','$lname','$email','$num','$desc') ";
    mysqli_query($con,$sql);
    echo 'sucessfully inserted';
}
else{
    echo 'Invalid Captcha';
}

?>