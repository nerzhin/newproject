"use strict";

function Calculator() {
    var methods = {
        '+': function(a, b) {
            return a + b;
        },
        '-': function(a, b) {
            return a - b;
        }
    }

    this.calculate = function(string) {
        var split = string.split(' ');
        var a = split[0];
        var b = split[2];
        var op = split[1];

        return methods[op](+a, +b);
    };

    this.addMethod = function(name, func) {
        methods[name] = func;
    };
}
