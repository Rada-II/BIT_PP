/*7. Write a function that filters all integer arguments that contain digit 5.
Function arguments: 23, 11.5, 9, "abc", 45, 28, 553
Output: [45, 553] */
function filterIntegersWithDigitFive(...args) {
  return args.filter(arg => {
    return (
      typeof arg === 'number' && arg % 1 === 0 && arg.toString().includes('5')
    );
  });
}

console.log(filterIntegersWithDigitFive(23, 11.5, 9, 'abc', 45, 28, 553));
