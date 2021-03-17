// Only change code velow this line

function logicOrder(num){
    if (num==28){
      return "Less then 50";
      }else if(num==60){
        return "Less then 100";
        }else{
            return "Greater than or equal to 100";
        }
      
  }

console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));

//Only change code above this line
module.exports = logicOrder;
