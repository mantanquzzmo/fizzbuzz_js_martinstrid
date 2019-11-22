Question 1:
sets the global.browser to be a new instance of BrowserHelpers with e2e_training_wheels as input for the function
Sets global.expect to be the output of chai.expect

Question 2:
This creates and sets the variable fizzBuzz to a new instance of FizzBuzz. Which will be needed for multiple of the coming tests. We need an actor for the play so to speak.


Question 3:
=== is more strict than ==. I assume maybe === wouldn't accept an array created by let and const to be equal but == would.

Question 4:
Since the code is being read from top to bottom we need to check the biggest number first because there will be instances where a number is divisible by 3 and 5 but should show only 'Buzz'