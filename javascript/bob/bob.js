//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  isQuestion = function(input) {
    return isNaN(input) && input.indexOf("?") > -1 && input.slice(-1) === '?';
  }

  isYelling = function(input) {
    return input.toUpperCase() === input && input.toLowerCase() !== input;
  }

  isNothing = function(input) {
    return input === '' || !input.trim();
  }

  if(isNothing(input)) return 'Fine. Be that way!';
  if(isYelling(input)) return 'Whoa, chill out!';
  if(isQuestion(input)) return 'Sure.';
  return 'Whatever.';
};

module.exports = Bob;
