/* 1. Write a program that takes a positive integer from user &
display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */
/* let userPosNum = +prompt("Enter a postive integar");
document.write(`number: ${userPosNum} <br>
round off value: ${Math.round(userPosNum)} <br>
Floor value: ${Math.floor(userPosNum)} <br>
ceil value: ${Math.ceil(userPosNum)} <br>`); */

/* 2. Write a program that takes a negative floating point
number from user & display the following in your browser.
a. number
b. round off value of the number
c. floor value of the number
d. ceil value of the number */
/* let userNegNum = +prompt("Enter a negative integar");
document.write(`number: ${userNegNum} <br>
round off value: ${Math.round(userNegNum)} <br>
Floor value: ${Math.floor(userNegNum)} <br>
ceil value: ${Math.ceil(userNegNum)} <br>`); */

/* 3. Write a program that displays the absolute value of a
number.
E.g. absolute value of -4 is 4 & absolute value of 5 is 5 */
/* let num1 = -4;
let abs1 = Math.abs(num1);
let num2 = 5
let abs2 = Math.abs(num2);
document.write("The absolute value of " + num1 + " is " + abs1 + "<br>");
document.write("The absolute value of " + num2 + " is " + abs2); */

/* 4. Write a program that simulates a dice using random()
method of JS Math class. Display the value of dice in your
browser.: */
/* let randomDice1 = Math.round(Math.random()*6)+1;
let randomDice2= Math.round(Math.random()*6)+1;
document.write(`random dice number: ${randomDice1} <br> random dice number: ${randomDice2}`) */

/* 5. Write a program that simulates a coin toss using random()
method of JS Math class. Display the value of coin in your
browser */
/* let randomToss = Math.floor(Math.random()*2)+1;
if(randomToss === 2) {
    document.write(`${randomToss} <br> random coin value: Heads`);
}else{
    document.write(`${randomToss} <br> random coin value: Tails`);
} */

/* 6. Write a program that shows a random number between 1
and 100 in your browser. */
/* let randomNumber = Math.round(Math.random()*100)+1;
document.write(`random number between 1 to 100: ${randomNumber}`); */

/* var userInput = +prompt("Enter your weight:");
var parsedWeight = parseFloat(userInput);
if (isNaN(parsedWeight)) {
  document.write("Invalid weight input.");
} else {
  document.write(The weight of user is: ${parsedWeight}  kilograms.);
} */

/* 8. Write a program that stores a random secret number from
1 to 10 in a variable. Ask the user to input a number
between 1 and 10. If the user input equals the secret
number, congratulate the user. */
/* let computerNumber = Math.floor(Math.random()*10)+1;
let userGuessNum = +prompt("Enter your Number (Note: the number between 1 to 10)");
if(userGuessNum === computerNumber) {
  alert("Congratulate You WIN 😎✔" + "  " + computerNumber);
}else{
  alert("Oops You Lose 😢" + " " + computerNumber);
} */
