<?php

class Divide {
    public function divide_func($numerator, $denominator) {
        if ($denominator !== 0) {
            return $numerator / $denominator;
        } else {
            throw new \Exception("Cannot divide by zero", 100);
        }
    }
}