<?php
	$to = "youremail@gmail.com";
	$from = 'email';
	$name = 'name';
	$headers = "From: $from";
	$subject = "You have a message.";

	$fields = array();
	$fields{"name"} = "Your Name";
	$fields{"email"} = "Your Email";
	$fields{"phonenumber"} = "Phone";
	$fields{"message"} = "Your Question";

	$body = "Here is what was sent Pool, form 'Ask Question':\n\n";
	foreach($fields as $a => $b){
		$body .= sprintf("%20s:%s\n",$b,$_REQUEST[$a]);
	}
	$send = mail($to, $subject, $body, $headers);

?>
