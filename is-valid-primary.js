/******************
 * YOUR CODE HERE *
 ******************/
const isValidPrimary = color => {
  if (color === 'red' || color === 'yellow' || color === 'blue') return true;
  else return false;
}

// Our setup code here. Don't touch!
if(typeof isValidPrimary === 'undefined') {
  isValidPrimary = undefined;
}

module.exports = isValidPrimary;
