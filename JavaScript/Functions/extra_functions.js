/*/**
    * Take a look at this common scenario–you have a function that returns a value,
    * which you then pass to another function. In our example, the first function,
    * multiplyByTwo(), loops through passed input array, multiplies each element
    * by two, and returns an array containing the result. The second function,
    * addOne(), takes a value, adds one to it, and returns it
   */

function multiplyByTwo(inputArray) {
    let newArray = [];
    for (let i = 0; i < inputArray.length; i++) {
        let element = inputArray[i];
        newArray[i] = element * 2;
    }
    return newArray;
}

function addOne(a) {
    return a + 1;
}
// Let's test these functions:
let inputOne = [1, 2, 3];
let outputArray = multiplyByTwo(inputOne);
console.log(outputArray); // [2, 4, 6]

let outputNum = addOne(100);
console.log(outputNum); // 101


// Now, let's say you want to have an array, myarr,
// that contains three elements, and each of the elements
// is to be passed through both functions

let inputTwo = [10, 20, 30];
let myarr = multiplyByTwo(inputTwo);
console.log(myarr);

// Now, loop through each element, passing it to addOne()

for (let i = 0; i < 3; i++) {
    myarr[i] = addOne(myarr[i]);
}

console.log(myarr); // [21, 41, 61]

// As you can see, everything works fine, but there's room for improvement.
// For example, there were two loops. Loops can be expensive if they go through
// a lot of repetitions. You can achieve the same result with only one loop. */


/* INSTRUCTIONS: All tasks needs to be done as regular function and after that as anonymous function!!!
   
   6. Write a function that replaces the elements of the given array between two positions with their doubled values. 
Input: [3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6 
Output: [3, 5, 2, 16, 180, -8, 46, 1, 67]*/

function doubleVal(arr, i1, i2) {
    let newArr = [];
    for (let i = i1; i <= i2; i++) {
        newArr.push(2 * arr[i]);
    }
    return "[" + arr.slice(0, i1).join(", ") + ", " + newArr.join(", ") + ", " + arr.slice(i2 + 1).join(", ") + "]";
}
console.log(doubleVal([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

let doubleValue = function (array, index1, index2) {

    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (i >= index1 && i <= index2) {
            newArray.push(array[i] * 2);
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(doubleValue([3, 5, 1, 8, 90, -4, 23, 1, 67], 2, 6));

/*7. Write a function that checks if every element of the first array is contained in the second array.
 Be careful with repetitions! 
Input: [3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]
Output: true*/

function checkElem(arr1, arr2) {
    let result = arr1.every(element => {
        return arr2.indexOf(element) !== -1;
    });
    return result;
}
console.log(checkElem([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));

let containingElements = function (arr1, arr2) {
    let result = true;
    for (let i = 0; i < arr1.length; i++) {
        let counter = 0;
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                counter++;
            }
        } if (counter === 0) {
            result = false;
        }
    }
    return result;
}
console.log(containingElements([3, 4, 1, 3], [8, 9, 3, 1, 11, 4, 3]));



/*8. Write a function that sorts an array of strings by the number of appearances of the letter ‘a’ or ‘A’. 
Input: [‘apple’, ‘tea’,  ‘amazing’, ‘morning’, ‘JavaScript’]
Output: [‘morning’, ‘apple’, ‘tea’, ‘JavaScript’, ‘amazing’]*/

function sortByNumberOfLetterA(arra) {
    let count = [];
    let newArra = []
	for (let i = 0; i < arra.length; i++) {
        count[i] = 0;
		for (let j = 0; j < arra[i].length; j++) {
			if (arra[i][j] === 'a' || arra[i][j] === 'A') {
                count[i]++;
			}
		}
        newArra.push({
            name: arra[i],
            value: count[i]
        })
	}
    return newArra.sort((a, b) => a.value - b.value).map(res => res.name);
}
console.log(sortByNumberOfLetterA(["apple","tea","amazing","morning","JavaScript"]));


let countLetterA = function (arra) {
    let count = [];
    let newArra = []
	for (let i = 0; i < arra.length; i++) {
        count[i] = 0;
		for (let j = 0; j < arra[i].length; j++) {
			if (arra[i][j] === 'a' || arra[i][j] === 'A') {
                count[i]++;
			}
		}
        newArra.push({
            name: arra[i],
            value: count[i]
        })
	}
    return newArra.sort((a, b) => a.value - b.value).map(res => res.name);
}

console.log(countLetterA(["apple","tea","amazing","morning","JavaScript"]));


/*9. Write a function that prints out the date of the next day. 
        Output:  25. 10. 2018.*/
        function writeDate() {
            let date = new Date();
            let day = date.getDate() + 1;
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return `${day}.${month}.${year}`;
        }
        console.log(writeDate());

        let writeDate2 = function () {
            let date = new Date();
            let day = date.getDate() + 1;
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return `${day}.${month}.${year}`;
        }
        console.log(writeDate2());

/*10. Write a function that prints out the date of the previous day. 
        Output:  23. 10. 2018.*/

        function writeDate1() {
            let date = new Date();
            let day = date.getDate() - 1;
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return `${day}.${month}.${year}`;
        }
        console.log(writeDate1());

/*11. Write a function that prints out an array of the numbers aligned from the right side.
        Input: [78, 111, 4, 4321]
        Output: 
        78
        111 
        4
        4321 */
        function writeNumbers(arr) {
            let max = 0;
            let newArr = [];
            for (i = 0; i < arr.length; i++) {
                arr[i] = arr[i].toString();
                if (arr[i].length > max) {
                    max = arr[i].length;
                }
            }
            for (i = 0; i < arr.length; i++) {
                for (j = 0; j < arr[i].length; j++) {
                    var blank = (max - arr[i].length);
                    var str = " ";
                }
                newArr.push(str.repeat(blank) + arr[i]);
            }
            return newArr.join("\n");
        }
        console.log(writeNumbers([78, 111, 4, 4321]));
