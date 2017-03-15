"use strict";

let romanValues = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
}

let roman = {
  convertToNumber: function(romanNumeral) {
    var characters = romanNumeral.split("");
    var result = 0;
    var previousValue = 0;
    for (var i = characters.length - 1; i > -1; i--) {
      var value = romanValues[characters[i]];
      if (value > result || value === previousValue) {
        result += value;
      } else {
        result -= value;
      }
      previousValue = value;
    }
    return result;
  },

  convertToRoman: function(number) {
    var stack = this.romanStack();
    var result = "";
    while(roman = stack.pop()) {
      if(roman.int <= number) {
        var times = Math.floor(number / roman.int);
        for (var i = 0; i < times; i++) {
          result += roman.letters;
        }
        if (times > 0) {
          number = number % roman.int;
        }
      }
      if (number < 1) {
        break;
      }
    }
    return result;
  },

  romanStack: function() {
    var stack = [];
    stack.push({int: 1, letters: "I"});
    stack.push({int: 4, letters: "IV"});
    stack.push({int: 5, letters: "V"});
    stack.push({int: 9, letters: "IX"});
    stack.push({int: 10, letters: "X"});
    stack.push({int: 40, letters: "XL"});
    stack.push({int: 50, letters: "L"});
    stack.push({int: 90, letters: "XC"});
    stack.push({int: 100, letters: "C"});
    stack.push({int: 400, letters: "CD"});
    stack.push({int: 500, letters: "D"});
    stack.push({int: 900, letters: "CM"});
    stack.push({int: 1000, letters: "M"});
    return stack;
  }
};

module.exports = roman;
