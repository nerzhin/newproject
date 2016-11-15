"use strict";

function Accumulator(startingValue) {
    this.value = startingValue;
    this.read = function() {
        this.value += +prompt('Enter the value', 0);
    };
}

var a = new Accumulator(5);