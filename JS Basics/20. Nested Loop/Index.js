/* A nested loop is a loop inside of another loop */


let symbol = window.prompt("Enter a symbol to use");
let rows = window.prompt('Enter # of rows');
let columns = window.prompt('Enter # of colunms');

for(let i = 1; i <= rows; i+=1){
    for(let j = 1; j <= columns; j+=1){
        //We need to???@@@ append the variable symbol & <br>
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
} 