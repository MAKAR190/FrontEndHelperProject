
<meta charset="utf-8"> 
<?php
$urok="Урок 22";
error_reporting( E_ERROR );   //Отключение предупреждений и нотайсов (warning и notice) на сайте
// создание переменных из полей формы		
if (isset($_POST['ordersName']))			{$ordersName			= $_POST['ordersName'];		if ($ordersName == '')	{unset($ordersName);}}
if (isset($_POST['ordersEmail']))		{$ordersEmail		= $_POST['ordersEmail'];		if ($ordersEmail == '')	{unset($ordersEmail);}}
if (isset($_POST['text']))			{$text			= $_POST['text'];		if ($text == '')	{unset($text);}}
if (isset($_POST['sab']))			{$sab			= $_POST['sab'];		if ($sab == '')		{unset($sab);}}
//стирание треугольных скобок из полей формы
/* комментарий */
if (isset($ordersName) ) {
$ordersName=stripslashes($ordersName);
$ordersName=htmlspecialchars($ordersName);
}
if (isset($ordersEmail) ) {
$ordersEmail=stripslashes($ordersEmail);
$ordersEmail=htmlspecialchars($ordersEmail);
}
if (isset($text) ) {
$text=stripslashes($text);
$text=htmlspecialchars($text);
}
// адрес почты куда придет письмо
$address="lutsyimakar@gmail.com";
// текст письма 
$note_text="Тема : $urok \r\nИмя : $ordersName \r\n Email : $ordersEmail \r\n Дополнительная информация : $text";

if (isset($ordersName)  &&  isset ($sab) ) {
mail($address,$urok,$note_text,"Content-type:text/plain; windows-1251"); 
// сообщение после отправки формы
    
echo "<p style='color:green;'>Уважаемый(ая) <b style='color:red;'>$ordersName</b> Ваше письмо отправленно успешно. <br> Спасибо. <br>Вам скоро ответят на почту <b style='color:red;'> $ordersEmail</b>.</p>";
}

?>