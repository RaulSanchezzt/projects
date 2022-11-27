<?php
class Animal {
    private $subgrupo;
    private $especie;
    private $alimentacion;
    private $edad;

    public function __construct($subgrupo, $especie, $alimentacion, $edad) {
        $this->$subgrupo = $subgrupo;
        $this->$especie = $especie;
        $this->$alimentacion = $alimentacion;
        $this->$edad = $edad;
    }

    public function sonido() {
        return 'Guau';
    }
}

?>