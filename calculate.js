"use strict";

function Calculator() {
  this.calculate = function(string) {
    var plus = string.indexOf('+');
    var minus = string.indexOf('-');
    var resultArr = [];
    var result = 0;

    if ( plus !== -1 ) {
        resultArr = string.split('+');
        result = Number(resultArr[0]) + Number(resultArr[1]);
    } else if ( minus !== -1 ) {
      resultArr = string.split('-');
      result = Number(resultArr[0]) - Number(resultArr[1]);
    } else {
      console.log('Error in if/else statement');
    };

    return console.log(result);
  };

  this.addMethod = function(name, func) {
    
  };
}
