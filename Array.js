// const friendAge = [12,45,23,21,33,66];

friendAge.push(100);
console.log(friendAge);
friendAge.pop();
console.log(friendAge); 

let maxAge= friendAge[0];
for (let i = 0; i < friendAge.length; i++) {
    let element = friendAge[i];
    if(element < maxAge ){
        maxAge = element
    }  
    
    
}console.log(maxAge); 

 const value = [22,2224,34,21,67,34];
let uniqueValue = [];
for (let i = 0; i < value.length; i++) {
    const element = value[i];
    var index = uniqueValue.indexOf(element);
    if(index == -1){
        uniqueValue.push(element);
    }
    
}
console.log(uniqueValue); 


function findOddNumber(number) {
     let oddArray =[];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if(element%2 !== 0){

            oddArray.push(element)
            
        }
        
    }return oddArray;
    
}
const number = [2,2,3,45,54,32,33,78];
const result = findOddNumber(number);
console.log(result);


/* let newAge = [];

const friendAge = [12,22,34,65,77,90];
for (let i = 0; i < friendAge.length; i++) {
    const element = friendAge[i];
    if(element%2 == 0){
        newAge.push(element);
    }

}
console.log(newAge); */
