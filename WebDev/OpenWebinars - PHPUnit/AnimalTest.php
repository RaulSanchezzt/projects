<?php

require_once('Animal.php');

class AnimalTest extends PHPUnit\Framework\TestCase {
    public function testSonido() {
        $animal = new Animal('', '', '', 11);
        $this -> assertEquals($animal -> sonido(), 'Guau');
    }
}

?>