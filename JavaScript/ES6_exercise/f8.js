/* 8. Write a function that returns indexes of the elements greater than 10.
Input: [1.6, 11.34, 29.23, 7, 3.11, 18]
Output: [1, 2, 5]*/

function indexTen(arr) {
  return arr.reduce((indexes, currentValue, currentIndex) => {
    if (currentValue > 10) {
      indexes.push(currentIndex);
    }
    return indexes;
  }, []);
}

console.log(indexTen([1.6, 11.34, 29.23, 7, 3.11, 18]));
