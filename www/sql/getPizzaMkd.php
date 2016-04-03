<?php include "db.php"; ?>

<?php
	//http://stackoverflow.com/questions/18382740/cors-not-working-php
	if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');    // cache for 1 day
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");         

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
            header("Access-Control-Allow-Headers:        {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

        exit(0);
    }


    //http://stackoverflow.com/questions/15485354/angular-http-post-to-php-and-undefined
    
		
	$sql = "SELECT * FROM pizzas_mkd";
	$reponse = $bdd->query($sql);
	
	$a_pizzas_mkd = array();
	while ($donnees = $reponse->fetch())
	{
		$a_pizzas_mkd[] = array(
			'id' => $donnees['PIZMKD_ID']
			,'name' => $donnees['PIZMKD_NAME']
			,'img' => $donnees['PIZMKD_IMG']
			,'PIZMKD_ING1' => $donnees['PIZMKD_ING1']
			,'PIZMKD_ING2' => $donnees['PIZMKD_ING2']
			,'PIZMKD_ING3' => $donnees['PIZMKD_ING3']
			,'PIZMKD_ING4' => $donnees['PIZMKD_ING4']
			,'PIZMKD_ING5' => $donnees['PIZMKD_ING5']
			);
	}
	echo json_encode($a_pizzas_mkd, JSON_HEX_APOS);
	
?>