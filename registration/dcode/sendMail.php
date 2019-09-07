<?php

    if(isset($_GET['phone'])&&isset($_GET['fullname'])&&isset($_GET['username'])&&isset($_GET['email'])&&!empty($_GET['email'])&&!empty($_GET['fullname'])&&!empty($_GET['username'])){
        $fullname = htmlentities($_GET['fullname']);
        $email = htmlentities($_GET['email']);
        $username = htmlentities($_GET['username']); 
        $phone = htmlentities($_GET['phone']);        
        if(empty($phone)){
            $toDisplay = "";
        } else {
            $toDisplay = "<br>Phone : <b>".$phone."</b>";
        }
        $to_email = $email;
        $subject = 'You registered for D\'Code | Amalthea \'19';
        $message = "Hello ".$fullname.",<br><br> Greetings from Amalthea '19<br><br>Thanks for registering for D'Code 2019. Your details are as follows: <br><br> Codechef Username : <b>".$username."</b><br>Fullname : <b>".$fullname."</b><br>Email : <b>".$email."</b>".$toDisplay."<br><br>The link for the rulebook is <a href='http://amalthea.iitgn.ac.in/rulebooks/decode.pdf'>here</a>.<br><br>Regards<br>Events Team Amalthea";
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
