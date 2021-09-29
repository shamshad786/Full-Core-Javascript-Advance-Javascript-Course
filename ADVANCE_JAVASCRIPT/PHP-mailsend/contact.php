<?php
        $name = $_REQUEST['Name'];
        $email = $_REQUEST['Sender'];
        $subject = $_REQUEST['Subject'];
        $message = $_REQUEST['Message'];

        if(empty($name)|| empty($email) || empty($subject) || ($message))
        {
            echo "all field required";
        }

        else{
            mail ("learnfacts01@gmail.com","mail send from php", $message, "From: $name < $email >"); 
            echo "<script type='text/javascript'>alert('your email send');
            window.history.log(-1);
            
            </script>";
        }

?>