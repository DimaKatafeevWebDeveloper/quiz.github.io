<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['name'])) {$name = $_POST['name'];}
    if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
	if (isset($_POST['VyborPereplanirovki'])) {$VyborPereplanirovki = $_POST['VyborPereplanirovki'];}
	if (isset($_POST['CelPereplanirovki'])) {$CelPereplanirovki = $_POST['CelPereplanirovki'];}
	if (isset($_POST['KulturnoeNasledie'])) {$KulturnoeNasledie = $_POST['KulturnoeNasledie'];}
   if (isset($_POST['SborDoc'])) {$SborDoc = $_POST['SborDoc'];}
   if (isset($_POST['Konflikty'])) {$Konflikty = $_POST['Konflikty'];}
 if (trim($phone) != '' && trim($name) != '')
	{ 

    $to = "dima.katafeev@mail.ru";
    $sendfrom   = "leads@pobeda.spb.ru";
    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";
    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";
    $subject = "Заявка с квиза";
    $message = 
    "
            <h2>$subject</h2><br>
            <b>Имя:</b> $name<br>
            <b>Телефон:</b> $phone<br>
			<b>Выберите вашу перепланировку:</b> $VyborPereplanirovki<br>
			<b>Цель перепланировки:</b> $CelPereplanirovki<br>
			<b>Является ли дом объектом культурного наследия?</b> $KulturnoeNasledie<br>
         <b>Потребуется ли сбор документов?</b> $SborDoc<br>
         <b>Есть ли конфликты с соседями, УК, жилищной инспекцией?</b> $Konflikty<br>;
    $send = mail ($to, $subject, $message, $headers);
    if ($send == 'true')
    {

		echo "<h4 align=\"center\">Спасибо! Мы свяжемся с вами в ближайшее время</h4>";
    }
    else

    {
    echo '<center><b>Ошибка. Сообщение не отправлено!</b></center>';
    }
	}	else {echo "<h4 align=\"center\">Поля <b>имя</b> и <b>телефон</b> не могут быть пустыми! Заявка НЕ отправлена! Попробуйте еще раз</h4>";}
} else {
	http_response_code(403);
	echo "Заявка НЕ отправлена! Попробуйте еще раз";

}?>
