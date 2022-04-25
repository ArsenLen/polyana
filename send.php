<?php
	$to = "<Polyana.dostavka@mail.ru>";
	$subject = "Бронирование столика | Заявка c сайта Polyana";

	$name        = $_POST['name'];
	$phone       = $_POST['phone'];
	$count        = $_POST['count'];
	$hall       = $_POST['hall']; 
	$date       = $_POST['date']; 
	$time       = $_POST['time']; 

	$message = ' 
	<html> 
		<head> 
			<title>Бронирование столика:</title> 
		</head> 
		<body> 
			<p>Имя: '.$name.'</p> 
			<p>Телефон: '.$phone.'</p>
			<p>Количество гостей: '.$count.'</p>
			<p>Зал: '.$hall.'</p> 
			<p>Дата и время: '.$date.' '.$time.'</p> 
		</body> 
	</html>';

	$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
	$headers .= 'From: <fox-m.com>' . "\r\n";
	$headers .= 'Reply-To:' . $to . "\r\n";
	$headers .= "Contacts: \r\n";

	mail($to, $subject, $message, $headers);
?>