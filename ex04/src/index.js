// Only change code velow this line

function compareDiffrentValues(m,n){
    if(m === n){
      return "Equal";
         
      } 
      return "Not equal";
      
  }

console.log(compareDiffrentValues(8, "8"));
console.log(compareDiffrentValues("8", 8));
console.log(compareDiffrentValues(`8`, 8));
console.log(compareDiffrentValues("8", "8"));
console.log(compareDiffrentValues(8, 8));
//Only change code above this line
module.exports = compareDiffrentValues;
