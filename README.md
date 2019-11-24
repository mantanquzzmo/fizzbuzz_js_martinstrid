###Fizz Buzz JavaScript

#Question 1:
sets the global.browser to be a new instance of BrowserHelpers with e2e_training_wheels as input for the function
Sets global.expect to be the output of chai.expect

#Question 2:
This creates and sets the variable fizzBuzz to a new instance of FizzBuzz. Which will be needed for multiple of the coming tests. We need an actor for the play so to speak.


#Question 3:
=== is more strict than ==. I assume maybe === wouldn't accept an array created by let and const to be equal but == would.

#Question 4:
Since the code is being read from top to bottom we need to check the biggest number first because there will be instances where a number is divisible by 3 and 5 but should show only 'Buzz'

#Question 5:
Unit test tests the program by running code that will see if the app is working. Feature test will test functionality by creating a dummy who will act in a website on your behalf.

#Question 6:
This code will start the browser, wait for it to start, then visit the address before the actual tests will initiate.
The second part adds the code that for before each new test it will make sure that the browser has been refreshed.
The third part makes sure that the browser is closed when all tests are completed.

#Question 7:
In the context of testing the expectations are what values will be set the given that the tests code has been executed.

#Question 8:
The script listens to that the website is loaded, creates and sets button to be the id of the button on the website, it sets
the displayDiv to the answer that will come out of the calculation from fizzbuzz.
Listen to a buttonclick on the id from the previously set button and when it hears it 
sets value to the value from the box value, creates a fizzbuzz which will be a new instance of the FizzBuzz
and the result of that fizzbuzz doing the check of the value will be what will be displayed in the 
div that was created previously.

Question 9:
A CDN is a server network that shares the same info as the host server but are spread do different places to make sure that they are accesible and share the download burden and keeps up the download speeds.


