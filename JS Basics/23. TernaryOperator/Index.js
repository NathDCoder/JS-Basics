/* Ternary operator is a shortcut for an 'if/else statement' 
            Takes 3 operands
            
            1. a condition with ?
            2. expression if True :
            3. expression if False
            
            
 condition ? exprIfTrue : exprIfFalse */


 checkHealth(true);

 function checkHealth(healthy){
    healthy ? console.log('You are Well') : console.log('You are Sick')
 }