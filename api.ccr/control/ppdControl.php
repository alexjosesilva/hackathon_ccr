<?php
include '../../model/ppd.php';

class ppdControl{
	function insert($obj){
		$ppd = new ppd();
		//echo $obj->titulo;
		return $ppd->insert($obj);
		header('Location:listar.php');
	}

	function update($obj,$id){
		$ppd = new ppd();
		return $ppd->update($obj,$id);
	}

	function delete($obj,$id){
		$ppd = new ppd();
		return $ppd->delete($obj,$id);
	}

	function find($id = null){

	}

	function findAll(){
		$ppd = new ppd();
		return $ppd->findAll();
	}
}

?>