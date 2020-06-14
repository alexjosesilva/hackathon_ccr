<?php
include '../../control/ppdControl.php';
 
$data = file_get_contents('php://input');
$obj =  json_decode($data);
//echo $obj->titulo;

$id = $obj->id;


if(!empty($data)){	
 $ppdControl = new ppdControl();
 $ppdControl->update($obj , $id);
 header('Location:listar.php');
}







?>