/* Switches examine a value for a mactch against many case clauses.
  It is more efficient than using many "else if" statements*/

let grade = "Elephant";

switch(grade){
  case "A":
    console.log("You did Fantastic!");
    break;
  case "B":
    console.log("You did very Well!");
    break;
  case "C":
    console.log("Keep up the good work!");
    break;
  case "D":
    console.log("You need to study!");
    break;
  case "F":
    console.log("You didn't even try!");
    break;
  default:
    console.log(grade, "is not a valid input")
}

// We can set conditions to the switch like so

grade = 75;

switch(true){
  case grade >= 90:
    console.log("You did Fantastic!");
    break;
  case grade >= 80:
    console.log("You did very Well!");
    break;
  case grade >= 70:
    console.log("Keep up the good work!");
    break;
  case grade >= 60:
    console.log("You need to study!");
    break;
  case grade < 60:
    console.log("You didn't even try!");
    break;
  default:
    console.log(grade, "is not a valid input")
}