/*5. Write a function that filters all the strings from the given array that contain substring JS or js.
Input: ["compiler", "transpiler", "babel.js", "JS standard", "linter"]
Output: ["babel.js, "JS standard"] */
function filterJS(array) {
  return array.filter(element => {
    if (typeof element === 'string') {
      return element.includes('JS') || element.includes('js');
    }
    return false;
  });
}

console.log(
  filterJS(['compiler', 'transpiler', 'babel.js', 'JS standard', 'linter'])
);
