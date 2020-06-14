<?php
include '../../control/ppdControl.php';
 
$data = file_get_contents('php://input');
$obj =  json_decode($data);
//echo $obj->titulo;



if(!empty($data)){	
 $ppdControl = new ppdControl();
 $ppdControl->insert($obj);
 header('Location:listar.php');
}







?>