

// document.getElementById("clickMe").onclick = function(){

 
//   if(document.getElementById("checkBox").checked){
//     console.log("You are a member");
//   }
//   else{
//     console.log("You are not a member");
//   }
// }


/* The code above works and there is nothing wrong with it
but it can be easier to read if we assign a variable to the element
we want to change */

document.getElementById("clickMe").onclick = function(){

  const myCheckBox = document.getElementById("checkBox")
  if(myCheckBox.checked){
    console.log("You are a member");
  }
  else{
    console.log("You are not a member");
  }
}