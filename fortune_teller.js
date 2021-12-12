// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
  var fortune = 7;
  console.log("your fortune is" + fortune);

// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
  if(fortune>=0 && fortune<=3){
      console.log("you must be that unlucky to receive low fortune huh? (0-3)");
  }
  else if( fortune>3 && fortune<=7){
      console.log("recieving average fortune isn't bad you know? just that you can get better. (4-7)");
  }
  else if( fortune>7 && fortune<=10){
      console.log("nice! you recieved high fortune! be sure to use that fortune wisely. (8-10)");
  }