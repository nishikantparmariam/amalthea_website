<?php
    /**https://gist.github.com/joashp/a1ae9cb30fa533f4ad94 */
    function encrypt_decrypt($action, $string) {
        $output = false;
        $encrypt_method = "AES-256-CBC";
        $secret_key = '123456789';
        $secret_iv = '987654321';
        // hash
        $key = hash('sha256', $secret_key);
        
        // iv - encrypt method AES-256-CBC expects 16 bytes - else you will get a warning
        $iv = substr(hash('sha256', $secret_iv), 0, 16);
        if ( $action == 'encrypt' ) {
            $output = openssl_encrypt($string, $encrypt_method, $key, 0, $iv);
            $output = base64_encode($output);
        } else if( $action == 'decrypt' ) {
            $output = openssl_decrypt(base64_decode($string), $encrypt_method, $key, 0, $iv);
        }
        return $output;
    }

    if(isset($_GET['SubscribeName'])&&isset($_GET['SubscribeEmail'])&&!empty($_GET['SubscribeName'])&&!empty($_GET['SubscribeEmail'])){
        $SubscribeName = htmlentities($_GET['SubscribeName']);
        $SubscribeEmail = htmlentities($_GET['SubscribeEmail']);
        $to_email = $SubscribeEmail;
        $subject = 'Verify Email for Subscribtion | Amalthea \'19';
        $message = 'Click <a href="https://docs.google.com/forms/d/e/1FAIpQLSfFzr-gbl6qKDQ_x4fKdLaloO-hjRrjfoF-r4IHnv0SYmsu9g/formResponse?emailAddress='.$to_email.'&entry.1604300308='.$SubscribeName.'">here</a> to verify your email. We will update you about all the major announcements and breaking news at the earliest.<br><br>Regards<br>Team Amalthea';
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
