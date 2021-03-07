"use strict";

// // Function declaration
// const age1 = calcAge1(1991);

// function calcAge1(birthYear) {
// 	return 2037 - birthYear;
// }

// // Function expression
// const age2 = calcAge2(1991);

// const calcAge2 = function (birthYear) {
// 	return 2037 - birthYear;
// };

// console.log(age1, age2);

// const jonas = {
// 	firstName: "Jonas",
// 	lastName: "Schmedtmann",
// 	birthYear: 1991,
// 	job: "teacher",
// 	friends: ["Michael", "Peter", "Steven"],
// 	hasDriversLicense: false,

// 	calcAge: function () {
// 		this.age = 2037 - this.birthYear;
// 		return this.age;
// 	},

// 	getSummary: function () {
// 		return `${this.firstName} is a ${this.calcAge()}-year old teacher, and he has ${
// 			this.hasDriversLicense ? "a" : "no"
// 		} driver's license`;
// 	},
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);

// console.log(jonas.getSummary());

///////////////////////////////////////
// Coding Challenge #1

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (score1, score2, score3) => {
// 	return (score1 + score2 + score3) / 3;
// };

// // const avgDolhins = calcAverage(44, 23, 71);
// // const avgKoalas = calcAverage(65, 54, 49);

// const avgDolhins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// const checkWinner = (avgDolhins, avgKoalas) => {
// 	if (avgDolhins >= 2 * avgKoalas) {
// 		return `Dolhins win (${avgDolhins} vs. ${avgKoalas})`;
// 	} else if (avgKoalas >= 2 * avgDolhins) {
// 		return `Koalas win (${avgKoalas} vs. ${avgDolhins} )`;
// 	} else {
// 		return "No team wins!";
// 	}
// };

// console.log(checkWinner(avgDolhins, avgKoalas));

///////////////////////////////////////
// Coding Challenge #2

/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/

// const calcTip = bill => {
// 	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// console.log(calcTip(100));

// const bills = [125, 555, 44];

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

///////////////////////////////////////
// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

// const object1 = {
// 	firstName: "Mark",
// 	lastName: "Miller",

// 	calcBMI: function (mass, height) {
// 		this.BMI = mass / height ** 2;
// 	},
// };

// const object2 = {
// 	firstName: "John",
// 	lastName: "Smith",

// 	calcBMI: function (mass, height) {
// 		this.BMI = mass / height ** 2;
// 	},
// };

// object1.calcBMI(78, 1.69);
// object2.calcBMI(92, 1.95);

// console.log(object1.BMI);

// console.log(
// 	object1.BMI > object2.BMI
// 		? `${object1.firstName} ${object1.lastName}'s BMI ${object1.BMI} is higher than ${object2.firstName} ${object2.lastName}'s ${object2.BMI}!`
// 		: `${object2.firstName} ${object2.lastName}'s BMI ${object2.BMI} is higher than ${object1.firstName} ${object1.lastName}'s ${object1.BMI}!`
// );

///////////////////////////////////////
// Coding Challenge #4

/*
Let's improve Steven's tip calculator even more, this time using loops!

1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!

TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

HINT: Call calcTip in the loop and use the push method to add values to the tips and totals arrays 😉

4. BONUS: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a DIFFICULT challenge (we haven't done this before)! Here is how to solve it:
  4.1. First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
  4.2. To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
  4.3. Call the function with the 'totals' array

GOOD LUCK 😀
*/

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = bill => {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
	const tip = calcTip(bills[i]);
	tips.push(tip);
	totals.push(bills[i] + tip);
}

console.log(tips, totals);

function calcAverage(arr) {
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		total += arr[i];
	}
	console.log(total / arr.length);
}

calcAverage(totals);
