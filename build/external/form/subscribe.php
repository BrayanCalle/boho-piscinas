<?php
	$to = "youremail@gmail.com";
	$from = 'email';
	$name = 'name';
	$headers = "From: $from";
	$subject = "You have a message.";

	$fields = array();
	$fields{"email"} = "Subscribe";

	$body = "Here is what was sent Pool, form 'Subscribe':\n\n";
	foreach($fields as $a => $b){
		$body .= sprintf("%20s:%s\n",$b,$_REQUEST[$a]);
	}
	$send = mail($to, $subject, $body, $headers);

?>
