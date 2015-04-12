//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  containsQuestionMark = function(input) {
    return isNaN(input) && input.indexOf("?") > -1 && input.slice(-1) === '?';
  }

  containsAnything = function(input) {
    return input.length !== 0;
  }

  containsUpperCase = function(input) {
    return input.toUpperCase() === input && input.toLowerCase() !== input;
  }

  containsNothing = function(input) {
    return input === '' || !input.trim();
  }

  if(containsNothing(input)) return 'Fine. Be that way!';
  if(containsUpperCase(input)) return 'Whoa, chill out!';
  if(containsQuestionMark(input)) return 'Sure.';
  if(containsAnything(input)) return 'Whatever.';
};

module.exports = Bob;
