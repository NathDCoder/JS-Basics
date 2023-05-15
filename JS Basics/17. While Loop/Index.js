/* A while loop repeats some code while some \
condition is true potentially infinite */

// let userName = "";

// while (userName == "" || userName == null){
//     userName = window.prompt("Enter your name");
// }

// console.log("Hello", userName);


/* There is also a "do while loop". 
Something must be done before checking the condition */

let userName;

do{
    userName = window.prompt("Enter your name");
}while(userName == "")

console.log("Hello", userName);