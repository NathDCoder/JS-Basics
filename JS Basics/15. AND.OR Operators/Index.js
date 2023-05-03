// AND & OR logical Operators are able to check more than 1 condition
// && AND (BOTH conditions must be true)
// || OR (Either condition can be true)


//&& Example
let temp = 50;

// if(temp > 65 && temp < 80){
//   console.log("The weather is good!");
// }
// else{
//   console.log("The weather is Bad");
// }

// temp = 90;

// if(temp > 65 || temp < 80){
//   console.log("The weather is good!");
// }
// else{
//   console.log("The weather is Bad");
// }

//We can add a Boolean in the code as well

temp = 30;
let sunny = true;

if(temp > 65 && temp < 80 && sunny){
  console.log("The weather is good!");
}
else{
  console.log("The weather is Bad!");
}
