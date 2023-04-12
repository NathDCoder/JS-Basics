/* You can use the slice() method to extract a section of a string, 
 and it returns it as a new string. You don't need to modify the original string. */

 //Example
 let fullName = "Martin Chuzzlewitz";
 let firstName;
 let lastName;

 /* The slice() method takes to arguments, the starting index and the ending index.
  In this example we want to change the last Name starting with C. That would be index of 7.
  If no second value is given JS assumes you mean to show the rest of the index starting from the first value.*/
//  lastName = fullName.slice(7);

 /* We give a second argument which is the last index of the letter of the first name. '
    This will only cover all the letters of the first name */
//  firstName = fullName.slice(0, 6);

/* In the real world we don't want to have to count spaces in order to find a character in a string,
 so we will use the indexOf() method. Plus one is important for the last name because the first value is just a space and +1
 gets rid of that space. */

lastName = fullName.slice(fullName.indexOf(" ") + 1);
firstName = fullName.slice(0, fullName.indexOf(" ")); 

 console.log(firstName)
 console.log(lastName)