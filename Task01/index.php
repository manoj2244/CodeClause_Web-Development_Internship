<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>

</head>
<body>
    <div class="main-form">
        <form id="form">
            <div class="form">
        
            <label for="name">First Name:</label>
            <input type="text" name="fname" placeholder="Enter first name">
            <label for="name">Last Name:</label>
            <input type="text" name="lname"placeholder="Enter last name">
            <label for="email">Email:</label>
            <input type="email" name="email"placeholder="Enter email">
            <label for="number">Number:</label>
            <input type="number" name="number"placeholder="Enter phone number">
            <label for="desc">Description:</label>
            <textarea name="desc" id="desc" cols="53" rows="5" placeholder="Give feedback to our company"></textarea>
            <label for="captcha">Captcha:</label>
            <input type="text" name="captcha"placeholder="Enter captcha" id="captcha">
            <img src="captcha.php" alt="" id="imgcaptch">
            <img src="refresh.png" alt="" id="refresh" onclick="refreshcaptcha();">
            </div>     
            <button type="submit" id="frm">submit</button>
</form>
            
        
    </div>
    
    <script src="https://code.jquery.com/jquery-3.6.2.min.js" integrity="sha256-2krYZKh//PcchRtd+H+VyyQoZ/e3EcrkxhM8ycwASPA=" crossorigin="anonymous"></script>
    <script>
        frm.addEventListener("click",function(e){
            e.preventDefault();
              jQuery.ajax({
                url:'inserrt.php',
                 type:'post',
                 data:jQuery('#form').serialize(),
                 success:function(data){
                     alert(data)
                 }
             })
        })
    
        function refreshcaptcha(){
            $("#imgcaptch").attr('src', 'captcha.php');
        }
     
    </script>
</body>
</html>