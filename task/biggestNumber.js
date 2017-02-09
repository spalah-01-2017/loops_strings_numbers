var userNumber;
var previousNumber = 0;

do {
	userNumber = Number(prompt("Enter any number", "1"));
	if (userNumber > previousNumber) {
  	previousNumber = userNumber;
  }
} while( userNumber );

alert(previousNumber);