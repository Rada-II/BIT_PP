 
  function split (arr,start,end){
    //let newArray = [];
    let result =[] ;
    for (let i = start; i <= end; i++) {
       result[i-start]= arr[i]     //result[i] = arr[i].push
           }
    console.log(result); 
 
}
split([1,2,3,4,5,6,7],2,4)

function toString (array){
    let result = "";
    for (let i = 0; i < array.length; i++) {
        result += array[i]+","
        
    }

    result=result.slice(0,-1)
    result= "[" + result + "]"
    console.log(result);
}
//toString([1,2,3,4,5,6,7]);

function writeTwoArrays (array1,array2){

        console.log("[" + array1 +" "+ array2);
        
        
        
    }
//writeTwoArrays([1,2,3],[5,6,7])

function createSubarrays (array,n){
    result = [];
    //result[0] = array.slice(0,n);result[x]=slice(x*n,(x+1)*n)
    //result [1] = array.slice(n,n+n);1*n,2*n//
    //result[2]= array.slice(n+n,n+n+n)//2*n,3*
    for (let i = 0; i < array.length/n; i++) {
        result[i]=array.slice(i*n,(i+1)*n)
        
    }
    return result;
    }
    //console.log(createSubarrays([1,2,3,4],2)); 


function printMatrix(array){
result = ""
for (let i = 0; i < array.length; i++) {
    result +="[" + array[i] +"] ,"
    
}
result= result.slice(0,-1)
console.log(result);
} 

let a = createSubarrays([1,2,3,4,5,6,7,8],3)
printMatrix(a)

function podelaNiza(array,a)
{   
    var n=[];
    var m=[];
    var h=0;
    for (let i = 0; i < a; i++) 
    {
    n[i]= array[i];
    }
    for (let j = a; j < array.length; j++) 
    {
    m[h]= array[j];
    h++;
    }
    return['[['+n+']','['+m+']]'];
}
console.log('8. ZADATAK:'+podelaNiza([2, 3, 4, 5], 2) );

const array = ["apple","tea","amazing","morning","JavaScript"];

array.sort((a,b) => b.match(/A/g) - a.match(/A/g));

console.log(array);