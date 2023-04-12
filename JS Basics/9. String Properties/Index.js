
// String properties and methods

let userName = "JeanValJean";
let phoneNumber = "541-512-6958";


// The .length method shows the length of the string
console.log(userName.length);
/* The .charAt() method shows the letter according to the number index inputted. 
 in the example below it is 0 the first index */
console.log(userName.charAt(0));

/* The .indexOf() method shows what number order a letter shows up in the string. */
console.log(userName.indexOf("J"));

/* The .lastIndexOf() method shows the last place the letter of a string is found. */
console.log(userName.lastIndexOf("V"));

/* .trim() gets rid of spaces */
userName = userName.trim();

/* .toUppCase() and .toLowerCase() sets the string to either all upper or all lower*/
userName = userName.toUpperCase();
userName = userName.toLowerCase();

/* .replaceAll() takes two arguments the character you want to replace 
and the character you want to replace it with. */
phoneNumber = phoneNumber.replaceAll("-", "*");

console.log(phoneNumber)

