



document.getElementById("clickMe").onclick = function(){

  const myCheckBox = document.getElementById("checkBox");
  const visaCard = document.getElementById("visaCard");
  const masterCard = document.getElementById("masterCard");
  const amexCard = document.getElementById("amexCard");

  if(myCheckBox.checked){
    console.log("You are a member");
  }
  else{
    console.log("You are not a member");
  }

  if(visaCard.checked){
    console.log("You have selected the Visa option");
  }
/* I had to put equal true for some reason for the else if statements
will revisit in the future to see why */
  else if(masterCard.checked == true){
    console.log("You have selected the Master Card option");
  }
  else if(amexCard.checked == true){
    console.log("You have selected the American Express option");
  }
  else{
    console.log("Please select a payment type");
  }
}