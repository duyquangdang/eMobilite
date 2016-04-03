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
    $postdata = file_get_contents("php://input");
	if (isset($postdata)) {
		$request = json_decode($postdata);
		$tableID = $request->tableID;
		
		if ($tableID != "") {
			$sql = "SELECT * FROM barycentre";
			$reponse = $bdd->query($sql);
			
			$a_barycentre = array();
			while ($donnees = $reponse->fetch())
			{
				$a_barycentre[] = array(
					'id' => $donnees['BRC_ID']
					,'id_product' => $donnees['BRC_PRD_ID']
					,'homme' => $donnees['BRC_HOMME']
					,'femme' => $donnees['BRC_FEMME']
					,'etudiant' => $donnees['BRC_ETUDIANT']
					,'retraite' => $donnees['BRC_RETRAITE']
					,'sportif' => $donnees['BRC_SPORTIF']
					,'famille' => $donnees['BRC_FAMILLEAVECENFANT']
					);
			}
			echo json_encode($a_barycentre);
			/*
			$sql = "UPDATE tables SET TBL_RESERVEE = 1 WHERE TBL_NUM =" . $tableID . " AND TBL_ZONE=1";
			try{
				echo "insertion ok" . $tableID;
				$reponse = $bdd->query($sql);
			}
			catch (Exception $e)
			{
				echo "erreur";
			}
			*/
		}
		else {
			echo "Empty username parameter!";
		}
	}
	else {
		echo "Not called properly with username parameter!";
	}
?>