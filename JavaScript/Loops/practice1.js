// let e2 = 3;
// let a2 = [5, -4.2, 3, 7];
// let output =""

// for (let i = 0; i < a2.length; i++) {
//     if(e2 === a2[i]){
//         console.log("yes");//output = "yes";
//         break;
//     }else{
//         console.log("no");//output = "no";
//     }
// }

// //console.log(output);

//sve zvezdice pisem u prvom i zadnjem redu
//sredina: zvezdice imam u prvoj i zadnoj koloni
//ukoliko zvezdice nisu u prvoj i zadnjoj koloni to je space

function drawsASquare(size){
    let result = '';

    for (let i = 0; i < size; i++) {                      //i je vrsta,red,udesno
        for (let j = 0; j < size; j++) {                     // j je kolona ,nadole 
            //result += '*'
            if(i==0 || i==size - 1){
               result += '1'
        
        }else if(j==0 || j==size -1){
                result += '1'
            }else(result +=" ")
            
        }  
        result +="\n"
        //console.log(result);
    }
    return result
}

 console.log(drawsASquare(5)); 


 /*11. Write a function that takes a list of strings and prints them, one per line, in a rectangular
frame.:
For example the list ["Hello", "World", "in", "a", "frame"] gets
printed as:
*********                    // reci pisem za sve osim prvog i zadnjeg reda
* Hello *
* World *                     // if(i!= 0 || i != array1.lenght + 2-1 ){}
* in    *                        starsOutput += array1[i-1]
* a     *
* frame *                       if(i !==0 || i !==){} 
*********
 */
function maxLengthOfWordArray(array){
    let max = array[0];
for (i = 1; i < array.length; i++){
  if(max.length < array[i].length){
    max = array[i];
  }
}
return max.length

}
//console.log(maxLengthOfWordArray(["Hello", "Worldooo", "in", "a", "frameoooooooo"])); 

function printsWord(array1){
   let max = maxLengthOfWordArray(array1);
   let starsOutput = "";

    for (let i = 0; i < array1.length + 2; i++) {                      
        for (let j = 0; j < max + 4; j++) {  
            //starsOutput += "*";
            if(i == 0 || i == array1.length + 2 -1 || j == 0 || j == max + 4 -1){
                starsOutput += "*";
            }else if(j==1){
                starsOutput += " ";
            }else if (i!= 0 && i != array1.lenght + 2-1 && j == 2){
                starsOutput += array1[i-1]
                j = array1[i -1].length + 1          //index kolone
            }else{
                starsOutput += " ";
            }
          
        }
        starsOutput +="\n";
    }
return starsOutput
}
console.log(printsWord(["Hello", "World", "in", "a", "frajjjjjjjme", "jjjiji"]));

function jj (array){

    for (let i = 0; i < array.length; i++) {
      
        
        return( array[i]);
    }
}
console.log(jj(["Hello", "World", "in", "a", "frajjjjjjjme", "jjjiji"]))

function  bla (n){
    let niz = [];
   
for(let i = 1;  i < n; i+=2) {

    niz.push(i) 
             //i*2<n treba da bude manje od n
}
return niz
}
console.log(bla(10));




 
