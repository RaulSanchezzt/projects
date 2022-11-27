<?php

use PHPUnit\Framework\TestCase;

class ExampleSetUpTearDownTest extends TestCase{

    protected static $db;

    public static function setUpBeforeClass(): void
    {
        // self::$db = new PDO('sqlite::memory:');
    }

    public static function tearDownAfterClass(): void
    {
        // self::$db = null;
    }

    protected function setUp(): void{
        $this->example = '1';
        $this->empty_array = array();
    }

    protected function tearDown(): void{
        unset($this->example);
    }

    public function testEmpty(){
        $this->example = '2';
        $this->assertTrue(empty($this->empty_array));
    }

    public function testEquals(){
        $this->assertEquals($this->example, 1);
    }
}