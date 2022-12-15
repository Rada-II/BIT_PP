/*1. Napisati funkciju u JavaScript-u koja na osnovu niza 6 različitih citata i autora,
ispisuje na stranici po jedan citat, ali tako da se citat promeni kada se program
pokrene.*/
let arr = ["The way to get started is to quit talking and begin doing. -Walt Disney",
    "Don't judge each day by the harvest you reap but by the seeds that you plant. -Robert Louis Stevenson",
    "The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt",
    "In the end, it's not the years in your life that count. It's the life in your years. -Abraham Lincoln",
    "The purpose of our lives is to be happy. -Dalai Lama",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn. -Benjamin Franklin"]

function random(arr) {
    let randomNumber = Math.floor(Math.random() * arr.length)

    return (arr[randomNumber]);
}
let result = random(arr);
console.log(result);
/*2. Napisati funkciju koja za godinu (kao ceo pozitivan broj) proverava da li je
prestupna. Godina je prestupna ako je deljiva sa 4 i nije godina veka (znači ako
nije deljiva sa 100 - 1900. nije bila prestupna). Od toga odstupa svaka četvrta
godina veka (znači ako je deljiva sa 400, onda je ipak prestupna - npr. 2000. je
prestupna).*/

function checkLeapYear(year) {

    if ((year % 4 == 0) && (year % 100 !== 0) || (year % 400 == 0)) {
        return (year + ' is a leap year');
    } else {
        return (year + ' is not a leap year');
    }
}
console.log(checkLeapYear(2000));
/*3. Napisati funkciju koja za zadatu reč (ili rečenicu) proverava koliko ima
samoglasnika i koliko suglasnika.*/
function vowel(str) {
    let string = str.replaceAll(" ", "").replaceAll(".", "").replaceAll(",", "").replaceAll("?", "");
    //console.log(string);
    let count = 0;
    let counts = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 'a' || string[i] == 'i' || string[i] == 'o' || string[i] == 'e' || string[i] == 'u') {
            count += 1;
        } else counts += 1
    }
    return "Number of vowels is " + count + " and number od consonant is " + counts;
}
console.log(vowel("fun k?ci ja"));


/*4. Kreirati funkciju koja prihvata array, a na izlazu ispisuje niz koji sadrži tipove
podataka pojedinačnih elemenata ulaznog niza.*/

function groupDataTypes(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(typeof array[i])
    }
    return newArray;
};
console.log(groupDataTypes([1, 'a', [], '4', 5, 34, true, undefined, null]));
/*5. Kreirati funkciju koja prijvata niz stringova kao ulayni parametar, a na izlazu
ispisuje samo stringove koji u sebi ne sadrže brojeve. Primer: ulazni niz [“12bb”,
“pp”, “as23s”, “00sd”] -> rezultat [“pp”].*/

function printNumberless(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        count = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (isNaN(arr[i][j])) {
                count++;
                if (arr[i].length === count) {
                    arr1.push(arr[i]);
                }
            }
        }
    }
    return arr1;
}

console.log(printNumberless(["pp", "e3434", "sfdfs323", "sd23sdsa", "asasd"]));

/*6. Kreirati funkciju koja prima string a kao rezultat ispisuje niz koji u sebi ima:
dužinu stringa, prvi karakter stringa, poslednji karakter, središnji karakter ako
string ima neparan broj znakova odnosno središnja dva karaktera ako ima paran
broj znakova, indeks drugog ponavljanja drugog karaktera u formatu “@ Index # ”
ili “not found” ako nema ponavljanja.
Primer 1: 'Computer' -> [8, 'C', 'r', 'pu', 'not found'] ,
Primer 2: '“'Science' -> [7, 'S', 'e', 'e', '@ index 5']*/

function stringWithALotConditions(str) {
    let result = [str.length, str[0], str[str.length - 1]];

    if (str.length % 2 === 0) {
        result[3] = str[str.length / 2 - 1] + str[str.length / 2];
    } else {
        result[3] = str[Math.floor(str.length / 2)];
    }

    if (str.lastIndexOf(str[1]) === 1) {
        result.push("Not found");
    } else {
        result.push("@ index " + str.lastIndexOf(str[1]));
    }

    console.log(result);
}

stringWithALotConditions("Science");

/*7. Dat je ulazni niz [9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8] gde se svaki element ponavlja
bar jednom osim dva elementa. Kreirati funkciju koja ispisuje dva elementa koja
se ne ponavljaju.*/


function nonRepeat(arr) {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count += 1
            }
        }
        if (count === 1) {
            arr1.push(arr[i])
        }
    }
    return (arr1);
}
console.log(nonRepeat([9, 4, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

/*8. Kreirati funkciju koja ulazni niz deli u podnizove duzine N i ispisuje ih.
Primer 1: ([2, 3, 4, 5], N=2) -> [[2, 3], [4, 5]]
Primer 2: ([2, 3, 4, 5, 6], N=3) -> [[2, 3, 4], [5, 6]] */

function splitArray(arr, n) {
    let arr1 = arr.slice(0, n);
    let arr2 = arr.slice(n, arr.length);
    let result = [];
    result.push(arr1);
    result.push(arr2);
    return result;
}

let res = splitArray([2, 3, 4, 5, 6], 3);
console.log(JSON.stringify(res));






