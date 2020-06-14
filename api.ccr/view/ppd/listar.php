<?php
include '../../control/ppdControl.php';
$ppdControl = new ppdControl();

header('Content-Type: application/json');

foreach($ppdControl->findAll() as $valor){
	echo json_encode($valor);
}


?>