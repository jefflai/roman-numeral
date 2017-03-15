"use strict";

var assert = require("assert");
var roman = require("../roman-numeral.js")

describe("convertToNumber", function() {
  it("should return correct value for I", function() {
    assert.equal(1, roman.convertToNumber("I"));
  });
  it("should return correct value for II", function() {
    assert.equal(2, roman.convertToNumber("II"));
  });
  it("should return correct value for III", function() {
    assert.equal(3, roman.convertToNumber("III"));
  });
  it("should return correct value for IV", function() {
    assert.equal(4, roman.convertToNumber("IV"));
  });
  it("should return correct value for V", function() {
    assert.equal(5, roman.convertToNumber("V"));
  });
  it("should return correct value for VI", function() {
    assert.equal(6, roman.convertToNumber("VI"));
  });
  it("should return correct value for VII", function() {
    assert.equal(7, roman.convertToNumber("VII"));
  });
  it("should return correct value for VIII", function() {
    assert.equal(8, roman.convertToNumber("VIII"));
  });
  it("should return correct value for IX", function() {
    assert.equal(9, roman.convertToNumber("IX"));
  });
  it("should return correct value for X", function() {
    assert.equal(10, roman.convertToNumber("X"));
  });
  it("should return correct value for MCDXCII", function() {
    assert.equal(1492, roman.convertToNumber("MCDXCII"));
  });
  it("should return correct value for MDCCLXXVI", function() {
    assert.equal(1776, roman.convertToNumber("MDCCLXXVI"))
  });
  it("should return correct value for MMXVII", function() {
    assert.equal(2017, roman.convertToNumber("MMXVII"))
  });
});

describe("convertToRoman", function() {
  it("should return correct value for 1", function() {
    assert.equal("I", roman.convertToRoman(1));
  });
  it("should return correct value for 2", function() {
    assert.equal("II", roman.convertToRoman(2));
  });
  it("should return correct value for 3", function() {
    assert.equal("III", roman.convertToRoman(3));
  });
  it("should return correct value for 4", function() {
    assert.equal("IV", roman.convertToRoman(4));
  });
  it("should return correct value for 5", function() {
    assert.equal("V", roman.convertToRoman(5));
  });
  it("should return correct value for 6", function() {
    assert.equal("VI", roman.convertToRoman(6));
  });
  it("should return correct value for 7", function() {
    assert.equal("VII", roman.convertToRoman(7));
  });
  it("should return correct value for 8", function() {
    assert.equal("VIII", roman.convertToRoman(8));
  });
  it("should return correct value for 9", function() {
    assert.equal("IX", roman.convertToRoman(9));
  });
  it("should return correct value for 10", function() {
    assert.equal("X", roman.convertToRoman(10));
  });
  it("should return correct value for 1492", function() {
    assert.equal("MCDXCII", roman.convertToRoman(1492));
  });
  it("should return correct value for 1776", function() {
    assert.equal("MDCCLXXVI", roman.convertToRoman(1776))
  });
  it("should return correct value for 2017", function() {
    assert.equal("MMXVII", roman.convertToRoman(2017))
  });
});
