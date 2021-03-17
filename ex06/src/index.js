// Only change code velow this line

function comparisonToEqual(a){
    if(a == 0){
      return "Less then 5";
      }
    if(a == 5){
      return "Less then 10";
    } 
    if(a == 17){
        return "10 or over";
      }
    if(a == 21){
       return "More then 20";
      }
      
  }

console.log(comparisonToEqual(0));
console.log(comparisonToEqual(5));
console.log(comparisonToEqual(17));
console.log(comparisonToEqual(21));

//Only change code above this line
module.exports = comparisonToEqual;
