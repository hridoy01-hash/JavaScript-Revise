/* const number = [3,2,4,6,8,12,23,24];

for(i=0;i<number.length;i++){
    let element = number[i];
    if(element %2 !== 0){
        console.log(element);
    }
    
} */ 

/* function addNumber(a,b){
   const result = a + b;
   return result;
}
const a = 2;
const b = 3;
const value = addNumber(a,b);
console.log(value); */

function addArray(number){
    // let sum = 0;
   for(i=0;i<number.length;i++){
       const element = number[i];
    //    sum = sum + element;
    if(element%2 == 0){
        let result = element;
        return result;
    }
    
   }


}
const number = [3,2,4,6,8,12,23,24];
const result = addArray(number);
console.log(result);  
