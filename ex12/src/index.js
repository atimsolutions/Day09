

function switchCaseSequential(num){

    // Only change code velow this line
      answer=num
      switch(answer) { 
      case 1:
      case 2:
      case 3:
          return "Low";
          break;
      case 4:
      case 5:
      case 6:    
          return "Mid";
          break;
      case 7:
      case 8:
      case 9:
          return  "High";
     
    }
    
//Only change code above this line
    return answer;
}

console.log(switchCaseSequential(1), switchCaseSequential(2), switchCaseSequential(3), switchCaseSequential(4),switchCaseSequential(5),switchCaseSequential(6),switchCaseSequential(7),switchCaseSequential(8) ,switchCaseSequential(9)); // Change this line

module.exports = switchCaseSequential;
