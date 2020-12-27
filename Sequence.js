let random1 = Math.floor(Math.random() * 10);
console.log("Random Single dig no is:" + random1);
let random2 = Math.floor(Math.random() * 10);
let result = random1 + random2;
console.log("Addition is:" + "random1 and random2 is:" + result);

let Random3 = Math.floor(Math.random() * 10) % 6 + 1;
console.log("Random no between 1-6 is:" + Random3);

//Write a program that reads 5 Random 2 Digit values ,then find their sum and the average
let sum = 0;
for (i = 0; i<5; i++) {
let number = Math.floor(Math.random() * 90) + 10;
 sum += number;
}
let average = sum/5;
console.log("The sum of  5 Random 2 Digit values is : "+ sum);
console.log("The average of  5 Random 2 Digit values is : "+ average);

//Unit Conversion
//a. 1ft = 12 in then 42 in = ? ft
let ft = 12;
res = 42 / ft;
console.log("Feet is:" + res);

//b. Rectangular Plot of 60 feet x 40 feet in meters
let feet = 60 * 40;
let meter = 0.3048;
 let res1 = (feet * 0.3048);
console.log("Meter is:" + res1);

//c. Calculate area of 25 such plots in acres
let acre = (25 * res1)/4046.8;
console.log("area of 25 such plots = "+acre+" acres");
