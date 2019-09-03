<?php

    if(isset($_GET['country'])&&isset($_GET['fullname'])&&isset($_GET['username'])&&isset($_GET['email'])&&!empty($_GET['email'])&&!empty($_GET['fullname'])&&!empty($_GET['username'])&&!empty($_GET['country'])){
        $fullname = htmlentities($_GET['fullname']);
        $email = htmlentities($_GET['email']);
        $username = htmlentities($_GET['username']);
        $to_email = $email;
        $subject = 'You registered for CryptixCTF | Amalthea \'19';
        $message = "Hello ".$fullname.",<br> Greetings from Amalthea '19<br>Thanks for registering for CryptixCTF 2019. Your details are : <br> Username : <b>".$username."</b><br>Fullname : <b>".$fullname."</b><br>Country : <b>".$country."</b><br>The link for the rulebook is <a href='http://amalthea.iitgn.ac.in/rulebooks/ctf.pdf'>here</a>.<br><br>Regards<br>Events Team Amalthea";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: noreply @ amalthea.iitgn.ac.in';
        if(mail($to_email,$subject,$message,$headers)) {            
            echo "done";
        } 
    } else {
        header("Location:index.php");
    }
?>
