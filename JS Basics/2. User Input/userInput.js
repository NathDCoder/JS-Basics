// JS side of user input //

// We will use the window prompt //
// let username = window.prompt("What's your name?");
// console.log(username);

// HTML way which is more difficult //

let username;

document.getElementById("myButton").onClick = function() {

    
    username = document.getElementsById("myText").value;
    console.log(username);
    document.getElementById("myLabel").innerHTML = "Hello " = username;
}
