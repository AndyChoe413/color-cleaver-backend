/******************
 * YOUR CODE HERE *
 ******************/
const colorDeconstructor = color => {
  if (color === 'orange') return 'red and yellow';
  if (color === 'purple') return 'red and blue';
  if (color === 'green') return 'blue and yellow';
}

// Our setup code here. Don't touch!
if(typeof colorDeconstructor === 'undefined') {
  colorDeconstructor = undefined;
}


module.exports = colorDeconstructor;
