

function switchCase(letter){
 
    // Only change code velow this line
    var animals;
  switch(letter){
      case "a":
          return "antilope";
          break;
      case "b":
          return "bird";
          break;
      case "c":
          return "cat";
          break;
      default:
            return "stuff";
            break;
  }

   
//Only change code above this line
    return animals;
}

console.log(switchCase("a"));
console.log(switchCase("b"));
console.log(switchCase("c"));
console.log(switchCase("d"));
console.log(switchCase(4));

//Only change code above this line
module.exports = switchCase;
