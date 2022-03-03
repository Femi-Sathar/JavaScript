// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//problem : check if no is narcisstic
//1.Understanding problem
//what is narcisstic problem?
//Answer- 1^3 + 5^3 + 3^3 = 153 - base 10

//2. Breaking into subproblem
// 1. Find no of digits in input - 3
// 2. Extract each digit from number(1,5,3)(no%10)
// 3. Find the sum of the power of (digit,lengthOfDigit
//4.update the input number = no/10
//5.return the sum
/*
let sum = 0;
const narcisstic = function (data) {
  const originalNo = data;
  const noOfDigits = String(data).length;

  while (data > 0) {
    let digit = data % 10;
    sum = sum + Math.pow(digit, noOfDigits);
    data = parseInt(data / 10);
  }
  return sum === originalNo ? true : false;
};

console.log(narcisstic(1652));

//problem: - part1
//we work for a company building smart home thermometer.our most recent task is this.Given an array of temperetaure for one day,calculate temperature amplitude.keep in mind that that sometimes there may be sensor error

//1.understanding the problem ?
// what is temperature amplitude?
//Answer : difference between highest and lowest temperature in array
//How to find max and min temeprature in array?
//what is a sensor error?And what to do? - ignore it

//2.Breaking into subproblems

//solution1 -
//How to ignore sensor errors?- ignore if string
//how can i reduce complexity from 2 for loop to one
//sort array elements - how to sort?
// method:- take 2 adjacent elements , compare it, swap it
//array[array.length -1] - array[0].

const temperature1 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude1 = function (temps) {
  let a = temps[0],
    b = temps[1];
  for (let i = 0; i < temps.length; i++) {
    for (let j = 0; j < temps.length - 1; j++) {
      if (typeof temps[j] !== 'number') continue;
      if (temps[j] > temps[j + 1]) {
        let temp = temps[j];
        temps[j] = temps[j + 1];
        temps[j + 1] = temp;
      }
    }
  }
  return temps[temps.length - 1] - temps[0];
};

console.log(calcTempAmplitude1(temperature1));
//complexity = O(n^2)

//solution2:
////How to ignore sensor errors?- ignore if string
//Find max temperature in array
//Find min temperature in array
//Subtract min from max(amplitude) return it
const temperature2 = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const calcTempAmplitude2 = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let tempCounter = 0; tempCounter < temps.length; tempCounter++) {
    if (typeof temps[tempCounter] !== 'string') {
      if (temps[tempCounter] < min) min = temps[tempCounter];
      if (temps[tempCounter] > max) max = temps[tempCounter];
    }
  }
  return max - min;
};

const tempAmplitude = calcTempAmplitude2(temperature2);
console.log(tempAmplitude);
//complexity = O(n)

//problem: - part2
//understanding problem
//Now function should recieve 2 arrays of temp
//with 2 arrays should i implement this twice -> no? - just merge two arrays into one array and padd it

//Breaking into sub problem
//how to merge two arrays?
//1.push array2 into array1 and pass as input
const temperature3 = [3, 5, 1];
const temperature4 = [9, 0, 5];
/*for (let i = 0; i < temperature4.length; i++) {
  temperature3.push(temperature4[i]);
} 
or
*/
/*
const temperature5 = temperature3.concat(temperature4);
console.log(temperature5);

const calcTempAmplitude3 = function (temps) {
  let min = temps[0];
  let max = temps[0];
  for (let tempCounter = 0; tempCounter < temps.length; tempCounter++) {
    if (typeof temps[tempCounter] !== 'string') {
      if (temps[tempCounter] < min) min = temps[tempCounter];
      if (temps[tempCounter] > max) max = temps[tempCounter];
    }
  }
  return max - min;
};
console.log(calcTempAmplitude3(temperature5)); */
// Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
  //debugger; - open debugger from code
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);

/*
Coding Challenge #1
Given an array of forecasted maximum temperatures, the thermometer displays a string with the given temperatures. Example: [17, 21, 23] will print "... 17oC in 1 days ... 21oC in 2 days ... 23oC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array' arr' and logs a string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework:Understand the problem and break it up into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data2:[12,5,-5,0,4]
*/

//understand and break it up - array result to string
const data = [12, 5, -5, 0, 4];
const printForecast = function (data) {
  let result = '...';
  for (let i = 0; i < data.length; i++) {
    result = result + ` ${data[i]}oC in ${i + 1} days ...`;
  }
  console.log(result);
};
printForecast(data);
