/******************
 * YOUR CODE HERE *
 ******************/
const colorCombinator = (color1,color2) => {
  if (color1 === 'red' && color2 === 'yellow') return 'orange';
   if (color1 === 'yellow' && color2 === 'red') return 'orange';
  if (color1 === 'red' && color2 === 'blue') return 'purple';
  if (color1 === 'blue' && color2 === 'red') return 'purple';
  if (color1 === 'yellow' && color2 === 'blue') return 'green';
   if (color1 === 'blue' && color2 === 'yellow') return 'green';
}

    expect(colorCombinator('red', 'yellow')).toBe('orange')
    expect(colorCombinator('yellow', 'red')).toBe('orange')
    expect(colorCombinator('red', 'blue')).toBe('purple')
    expect(colorCombinator('blue', 'red')).toBe('purple')
    expect(colorCombinator('yellow', 'blue')).toBe('green')
    expect(colorCombinator('blue', 'yellow')).toBe('green')


// Our setup code here. Don't touch!
if(typeof colorCombinator === 'undefined') {
  colorCombinator = undefined;
}

module.exports = colorCombinator;
