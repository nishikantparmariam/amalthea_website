<?php

    if(isset($_GET['email'])&&!empty($_GET['email'])&&isset($_GET['name'])&&!empty($_GET['name'])){
        $email = htmlentities($_GET['email']);             
        $name = htmlentities($_GET['name']);                               
        $subject = 'Confirmation of application for Symposium: Amalthea \'19, IIT Gandhinagar';
        $message = "Dear ".$name.",<br><br>Greetings from Amalthea’19!<br><br>
        Thank you for applying for the Symposium on <b>Drug Discovery and Distribution: Taking a Leap to be held on October 19, 2019, in Amalthea’19, at IIT Gandhinagar.</b> 
        <br><br>
        Further details of the Symposium shall be shared through an e-mail.
        <br><br>
        For any query, please revert back to:<br>
        <ul>
            <li>
                Arpita Kabra: <a href='arpita.kabra@iitgn.ac.in'>arpita.kabra@iitgn.ac.in</a><br>
            </li>
            <li>
                Udit Vyas: <a href='udit.18110176@iitgn.ac.in'>udit.18110176@iitgn.ac.in</a>
            </li>
        </ul>                
        <br><br>
        We hope to see you at Amalthea this year.<br><br>
        Thank You<br><br>
        Symposium Team | Amalthea '19<br>
        Visit our website: <a href='amalthea.iitgn.ac.in'>amalthea.iitgn.ac.in</a>";
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
