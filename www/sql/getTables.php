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
    
		
	$sql = "SELECT * FROM tables";
	$reponse = $bdd->query($sql);
	
	$a_tables = array();
	while ($donnees = $reponse->fetch())
	{
		$a_tables[] = array(
			'id' => $donnees['TBL_ID']
			,'num' => $donnees['TBL_NUM']
			,'zone' => $donnees['TBL_ZONE']
			,'reservee' => $donnees['TBL_RESERVEE']
			,'paiement' => $donnees['TBL_PAIEMENT']
			);
	}
	echo json_encode($a_tables, JSON_HEX_APOS);
	
?>