<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTML(true);

    //whos send mail
    $mail->setFrom('testy6477@gmail.com'); //special email for send form from site -  for resesend to your email (destination)
    //to whom to send mail
    $mail->addAddress('baddesinger5@gmail.com');
    //subject
    $mail->Subject = 'тема';

    //choose hand in our form
    $hand = "Правая";
    if($_POST['hand'] == "left") {
        $hand = "Левая";
    }

    //letter`s body
    $body = '<h1>Это письмо</h1>';

    //check empty inputs 
    if(trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))) {
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }
    if(trim(!empty($_POST['hand']))) {
        $body.='<p><strong>Рука:</strong> '.$hand.'</p>';
    }
    if(trim(!empty($_POST['age']))) {
        $body.='<p><strong>Возраст:</strong> '.$_POST['age'].'</p>';
    }

    if(trim(!empty($_POST['message']))) {
        $body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
    }

    //add file to letter
    if (!empty($_FILES['image']['tmp_name'])) {
        //upload file way
        $filePath = __DIR__ . "/files/" . $_FILES['image']['name'];
        //upload file
        if (copy($_FILES['image']['tmp_name'], $filePath)) {
            $fileAttach = $filePath;
            $body.='<p><strong>Фото в приложении</strong></p>';
            $mail->addAttachment($fileAttach);
        }
    }

    $mail->Body = $body;

    //send mail finally
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>




