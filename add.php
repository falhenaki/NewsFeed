<?php echo 'who am i' . exec('whoami');
 ?>


<?php 
ini_set('display_startup_errors', 1);
ini_set('display_errors', 1);
error_reporting(-1);

// Open and parse the XML file
//echo "test";
//$temp = $_POST['myxml'];
$temp2 = $_POST['uuser']; 
$xml=simplexml_load_file("users.xml");
//echo $username . "that was a username";
//echo $temp;
//$xml = simplexml_load_string($temp);
//$sxe = new SimpleXMLElement($xml->asXML());
//print_r('all xml' . $xml);
//echo ;//$xml->asXml(). "\n\n"; 
//$xml->addAttribute('type', 'documentary');
//print_r($xml);
//$doc = new DOMDocument();
//$doc->load($xml);

/////////////////////
foreach ($xml->details as $detail)
{
    if ((string) $detail->username === $temp2)
    {
        echo "ID: " . $detail->username . "\n";
        echo "Title: " . $detail->password . "\n";
		if ($detail->lastseen != null || $detail->lastseen = ""){
			$detail->lastseen = date("Y-m-d H:i:s");
		}
		else{
			$detail->addChild('lastseen', date_default_timezone_set('EST/-5.0/no DST'));
		}
    }
}
print_r($xml);
$xml->saveXML("users.xml");
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
