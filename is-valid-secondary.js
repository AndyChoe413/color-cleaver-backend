/******************
 * YOUR CODE HERE *
 ******************/
const isValidSecondary = color => {
  if (color === 'orange' || color === 'green' || color === 'purple') return true;
  else return false;
}



// Our setup code here. Don't touch!
if(typeof isValidSecondary === 'undefined') {
  isValidSecondary = undefined;
}

module.exports = isValidSecondary;
