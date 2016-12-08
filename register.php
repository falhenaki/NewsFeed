<?php 
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

// Open and parse the XML file
//echo "test";
//$temp = $_POST['myxml'];
//echo($_POST);
$registrar = $_POST['registrar']; 
$rpassword = $_POST['rpassword']; 

$xml = simplexml_load_file("users.xml");
$sxe = new SimpleXMLElement($xml->asXML());
$newItem = $sxe->addChild("details");
$newItem->addChild("username", 'user5');
$newItem->addChild("password", 'pass5');

$sxe->asXML("users.xml"); 

/*$xmlstr = "<?xml version='1.0' standalone='yes'?> <details> <username>". $registrar. "</username> <password>". $rpassword ."</password> <lastseen></lastseen> </details>";
*/
//$xml=simplexml_load_file("users.xml");
//echo 'this is the user ' .$registrar . " \n and this is the password " .  $rpassword;
//$xml->details.addChild('username', $registrar));
//echo $username . "that was a username";
//echo $temp;
//$xmlstr = simplexml_load_string($xmlstr);
//echo gettype($xmlstr);
//$sxe = new SimpleXMLElement($xml->asXML());

//print_r('all xml' . $xml);
//echo ;//$xml->asXml(). "\n\n"; 
//$movies = simplexml_load_file($xmlstr);
//print_r($movies);
    /////$detail = $xml->addChild('details');
	//		$xml->$detail->addChild('username', 'test');
//$detail = $xml->addChild('movie');
 ////////$detail->addChild('username', $registrar);
////////$detail->addChild('password', $rpassword);
////////////$detail->addChild('lastseen', 'dummy');


//$characters = $movie->addChild('characters');
//$character  = $characters->addChild('character');
//$character->addChild('name', 'Mr. Parser');
//$character->addChild('actor', 'John Doe');


//print_r($xml);
//print_r($xml);
//$doc = new DOMDocument();
//$doc->load($xml);

/////////////////////

/*


	echo "\n my logged in user is  " . $temp2 . "\n";
	//echo $xml->details->{'user1'}->username . "tjos";
	$find = $xml-> details[1] ->children();
	print_r("find \n -- -" . $find . " --- \n");

foreach ($xml->children() as $second_gen) {
	//echo "@@@@\n";
	$result = $second_gen->xpath('username');
	//print_r($second_gen['username']);
	//echo( $result[0][0]);
	//echo 'it';
	//echo('echoing' . $result[0][0]);
	//echo gettype($result[0][0]);
//	echo "before loop \n";
	// echo " " . $current;
	//print_r( 'what is this?' . gettype($result));
	if((string) $result[0] === (string) $temp2 ) {
		//echo gettype($result);
		echo $xml->details->{'user1'}->username;
		//$xml->details->addChild('date', 'Mr. Parser');
		//echo "appended\n" . (string) $result;
		
}
}
*/
//print_r($xml);
//$itemsNode = $sxe->details[0];
//$itemsNode->addChild("lastseen", date("Y-m-d H:i:s"));


//print_r($sxe);
//echo $doc->saveXML();

//$child = $xml->topic[0]->addChild("test1");
// Add the text attribute
//$child->addAttribute("text", "test2");
// Display the new XML code
//echo $xml->asXML();
// Store new XML code in questions.xml
//$xml->asXML("questions.xml");
?>
