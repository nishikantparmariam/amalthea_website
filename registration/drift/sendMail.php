<?php

    if(isset($_GET['email'])&&!empty($_GET['email'])&&isset($_GET['name'])&&!empty($_GET['name'])){
        $email = htmlentities($_GET['email']);             
        $name = htmlentities($_GET['name']);                               
        $subject = 'Amalthea\'19- Invitation for Drift';
        $message = "Dear ".$name.",<br><br>
        Greetings from Amalthea'19!<br><br>        
        Your registration for Drift has been confirmed. Hoping to see your team at the event.<br><br>                
        For any further assistance, please feel free to contact us. For more Amalthea content and updates, subscribe to our website or download the  official Amalthea App.<br><br>
        Download the rulebook from <a href='http://amalthea.iitgn.ac.in/rulebooks/drift.pdf'>here</a>. Checkout Amalthea '19 Official <a href='https://play.google.com/store/apps/details?id=in.ac.iitgn.amalthea'>App</a> and <a href='http://amalthea.iitgn.ac.in/'>Website</a>.<br><br>        
        Thanks & Regards<br>
        Events Team Amalthea";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $headers .= 'From: noreply @ amalthea.iitgn.ac.in';        
        if(mail($email,$subject,$message,$headers)){
                echo "Done";
        }                  
        
    } else {
        header("Location:index.php");
    }
?>
