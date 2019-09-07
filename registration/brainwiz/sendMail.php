<?php

    if(isset($_GET['email1'])&&isset($_GET['email2'])&&isset($_GET['email3'])&&!empty($_GET['email1'])&&!empty($_GET['email2'])&&!empty($_GET['email3'])){
        $email1 = htmlentities($_GET['email1']);        
        $email2 = htmlentities($_GET['email2']);        
        $email3 = htmlentities($_GET['email3']);                
        $subject = 'Amalthea\'19- Invitation for BrainWiz';
        $message = "Dear participant,<br>
        Greetings from Amalthea'19!<br><br>        
        Your registration for BrainWiz has been confirmed. Hoping to see your team at the event.<br><br>        
        Note that every team member is required to bring along their school ID cards. School uniform is not compulsory and food will be available at the food courts in the event (paid). Also, don't forget to carry water bottles as we are a disposables free campus. Wearing caps is also recommended.<br><br>        
        For any further assistance, please feel free to contact us. For more Amalthea content and updates, subscribe to our website or download the  official Amalthea App.<br><br>
        Download the rulebook from <a href='http://amalthea.iitgn.ac.in/rulebooks/BrainWiz.pdf'>here</a>. Checkout Amalthea '19 Official <a href='https://play.google.com/store/apps/details?id=in.ac.iitgn.amalthea'>App</a> and <a href='http://amalthea.iitgn.ac.in/'>Website</a>.<br><br>        
        Thanks & Regards<br>
        Ajinkya Pawar<br>
        Core Committee Member<br>
        Amalthea'19<br>
        Contact: 9623011800";//"Hello ".$fullname.",<br><br> Greetings from Amalthea '19<br><br>Thanks for registering for CryptixCTF 2019. Your details are as follows: <br><br> Username : <b>".$username."</b><br>Fullname : <b>".$fullname."</b><br>Country : <b>".$country."</b><br><br>The link for the rulebook is <a href='http://amalthea.iitgn.ac.in/rulebooks/ctf.pdf'>here</a>.<br><br>Regards<br>Events Team Amalthea";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: noreply @ amalthea.iitgn.ac.in';        
        if(mail($email1,$subject,$message,$headers) && mail($email2,$subject,$message,$headers) && mail($email3,$subject,$message,$headers)){
                echo "Done";
        }                  
        
    } else {
        header("Location:index.php");
    }
?>
