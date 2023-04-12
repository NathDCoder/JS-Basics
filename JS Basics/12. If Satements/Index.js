/* If statements sets a condition whether or not something is true.
  If it is true, then do something, if it is not, then do nothing. */



  // let age = 21;

  // //This statement will check if the variable age is greater than or equal to 18.

  // if(age >= 18){
  //   console.log("You are still a kid xD");
  // }
  

  // let kid = 12

  //   if(kid >= 18){
  //     console.log("You are still a kid xD");
  //   }
  //   // We can add else statements to check the other end of the condition
  //     else {
  //         console.log("You like a Babyyyy!");
  //     }



  // We can check other conditions as well with else if before the code runs else

  let person = 12

  if(person >= 18){
    console.log("You are still a kid xD");
  }
  else if(person <= 0){
    console.log("You are just a thought");
  }
  // We can add else statements to check the other end of the condition
    else {
        console.log("You like a Babyyyy!");
    }

    // You can add as many else if statements as you like

    let human = 68

    if(human <= 65){
      console.log("You aren't old yet xD");
    }
    else if(human <= 0){
      console.log("You are just a thought");
    }
    else if(human >= 65){
      console.log("You Old Brah!")
    }
      else {
          console.log("You like a Babyyyy!");
      }
  
/* You can use if statements to check boolean values. 
  You can change the boolean to either true or false to check both conditions */

let connected = true;

if(connected){
  console.log("Connection Successful")
}
else{
  console.log("Connection Unsuccessful")
}
