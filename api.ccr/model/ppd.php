<?php
include '../../conexao/Conexao.php';

class ppd extends Conexao{
	private $id;
    private $latitude;
    private $longitude;
    private $title;
    private $description;

    function getId() {
        return $this->id;
    }

    function getLatitude() {
        return $this->latitude;
    }

    function getLongitude() {
        return $this->longitude;
    }

    function getTitle() {
        return $this->title;
    }

    function getDescription() {
        return $this->description;
    }

    function setLatitude($latitude) {
        $this->latitude = $latitude;
    }

    function setLongitude($longitude) {
        $this->longitude = $longitude;
    }

    function setTitle($title) {
        $this->title = $title;
    }

    function setDescription($description) {
        $this->curso_id = $description;
    }

    public function insert($obj){
    	$sql = "INSERT INTO ppd (latitude, longitude, title, description) VALUES(:latitude, :longitude, :title, :description)";

    	$consulta = Conexao::prepare($sql);
        $consulta->bindValue('latitude',  $obj->latitude);
        $consulta->bindValue('longitude', $obj->descricao);
        $consulta->bindValue('title' , $obj->title);
        $consulta->bindValue('description' , $obj->description);
    	return $consulta->execute();

	}

	public function update($obj,$id = null){
		$sql = "UPDATE ppd SET latitude = :latitude, longitude = :longitude, title = :title, description = :description WHERE id = :id ";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('latitude',  $obj->latitude);
        $consulta->bindValue('longitude', $obj->descricao);
        $consulta->bindValue('title' , $obj->title);
        $consulta->bindValue('description' , $obj->description);
		$consulta->bindValue('id', $id);
		return $consulta->execute();
	}

	public function delete($obj,$id = null){
		$sql =  "DELETE FROM ppd WHERE id = :id";
		$consulta = Conexao::prepare($sql);
		$consulta->bindValue('id',$id);
		$consulta->execute();
	}

	public function find($id = null){

	}

	public function findAll(){
		$sql = "SELECT * FROM ppd";
		$consulta = Conexao::prepare($sql);
		$consulta->execute();
		return $consulta->fetchAll();
	}

}

?>