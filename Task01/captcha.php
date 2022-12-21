<?php
session_start();
$captcha = md5(microtime());
$captcha_val = substr($captcha,0,6);
$_SESSION['code']=$captcha_val;
$create_image = imagecreate(100,37);
imagecolorallocate($create_image,51,112,183);
$text_color = imagecolorallocate($create_image, 255,255,255);
imagestring($create_image,5,23,10,$captcha_val,$text_color);
header("Content-type:image/jpeg");
imagejpeg($create_image);

?>