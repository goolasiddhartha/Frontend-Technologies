// Assignment Operators
// let a=20;
// console.log(a+=5);
// console.log(a-=5);
// console.log(a*=5);
// console.log(a/=4);
// console.log(a%=4);
// console.log(a**=4);

// Comparison Operator
// let a=5;
// let b=2;
// console.log("a==b",a==b)
// console.log("a!=b",a!=b)
// console.log("a===b",a===b)
// console.log("a!==b",a!==b)
// console.log("a>b",a>b)
// console.log("a>=b",a>=b)
// console.log("a<b",a<b)
// console.log("a<=b",a<=b)

//  Logical Operators
// let cond1=a>b;
// let cond2=a==6;
// console.log(cond1&&cond2);
// console.log(cond1 || cond2);
// console.log(cond1 !=cond2);

// Conditional Statements
// if Statement
// let age = 25;
// if (age >=18) {
//   console.log("Can Vote");
// }

// if else statement
// let age=16;
// if (age>=18){
//     console.log("Can Vote")
// }
// else{
//     console.log("Cannot Vote")
// }
// let a=4;
// if (a%2==0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }

// else-if statement
// age=70;
// if (age<18){
//     console.log("Junior");
// }
// else if(age>60){
//     console.log("Senior");
// }
// else{
//     console.log("Middle");
// }

// Ternary Operator
// let age=25;
// let result=age>=18?"Adult":"Not Adult";
// console.log(result)

// Dialog Boxes
// let num=prompt("Enter a Number")
// if (num%5==0){
//     console.log(num,"It is Divisble by 5")
// }
// else{
//     console.log(num,"It is not Divisble by 5")
// }

// Student Grades
// let marks=prompt("Enter Marks")
// if (marks>=80 && marks<=100){
//     console.log("A");
// }
// else if(marks>=70 && marks<=89){
//     console.log("B");
// }
// else if(marks>=60 && marks<=69){
//     console.log("C");
// }
// else if(marks>=50 && marks<=59){
//     console.log("D");
// }
// else{
//     console.log("F");
// }

// FOR LOOPS
// for (let i=1;i<=5;i++){
//     console.log("Sidhu")
// }

// Calculate sum of 1 to 5
// let sum = 0;
// for (let i = 1; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log("Sum=", sum);

// Infinite loop
// for (let i=1;i>=0;i++){
//     console.log("i=",i)
// }

// While Loop
// let i=1
// while(i<=5){
//     console.log("i=",i)
//     i++
// }

// do while loop
// let i = 1;
// do {
//   console.log("i=", i);
//   i++;
// } while (i <= 5);

// for of loop
// let str="Sidhu";
// for (let  i of str){
//     console.log(i)
// }

// for in loop
// let Student={
//     name:"Sidhu",
//     age:20,
//     cgpa:7.5,
//     istrue:true,
// }
// for (let key in Student){
//     console.log("Key=",key,"value=",Student[key])
// }

// print all even numbers from 0 t0 100

// i = 0;
// for (i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i)
//   }
// }

// Guees the random number user can give input
// let gamenum=25
// let usernum=prompt("Guess the game number");

// while(usernum!=gamenum){
//   prompt("You Enterd wrong number,enter correct number")
// }
// console.log("Congratulations you enterd correctly")

// STRINGS
// let str = "G Siddhartha";
// console.log(str);

// Length of string
// let str = "G Siddhartha";
// console.log(str.length);

// String indices
// let str = "G Siddhartha";
// console.log(str[0]);
// console.log(str[1]);
// console.log(str[str.length-1]);

// Template literals
// let str = `G Siddhartha`;
// console.log(str);

// single interpolation

// Example 1
// let obj = {
//   item: "Pen",
//   price: 10,
// };
// let output = `the cost of ${obj.item} is ${obj.price} rupees`;
// console.log(output);

// console.log("The cost of",obj.item,"is",obj.price,"Rupees")

// Example 2
// console.log(`this template literal ${1+2+3}`)

// Example 3
// console.log("G \n Siddhartha")

// Example 4
// console.log("G\tSiddhartha")

// Example 5
// let str = "G\tSiddhartha";
// console.log(str.length);

//  String Methods

// Example on upper case()
// let str = "G Siddhartha";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// Example 2 on trim()
// let str = "    G  Siddhartha   ";
// console.log(str);
// console.log(str.trim());

// Example 3 on slice()
// let str="Hello"
// console.log(str.slice(1,3))
// console.log(str.slice(-4,-1))

// Example 4 on concat()
// let str1="G";
// let str2="Siddhartha";
// console.log(str1.concat(" ",str2))

// Example 5 on replace()
// let str1="I Like Java.Java is powerful";
// console.log(str1.replace("Java","js"))
// console.log(str1.replaceAll("Java","js"))
// console.log(str1.replace(/Java/g,"Python"))

// Example 6 on charAt()
// let str="Hello";
// console.log(str.charAt(2))

// Arrays

// let marks=[10,45,67,89,34];
// console.log(marks)

// Array Indices
// let fruits=["Apples","Banana","Mango"];
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])
// console.log(fruits[fruits.length-1])
// fruits[1]="Orange";
// console.log(fruits)

// Looping in array
// For Loop
// let fruits=["Apple","Banana","Manogo"]
// for (let i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

// // For....of loop
// let names=["Sidhu","Bharath","Eshaan","Aadit","Akhira"]
// for (let name of names){
//     console.log(name);
// }

// Find average in array
// let marks=[85,97,44,37,76,60];
// let sum=0;
// for (let val of marks){
//     sum+=val;
// }
// let avg=sum/marks.length;
// console.log(sum);
// console.log(`The average of marks is= ${avg}`);

// All items with 10% offer
// // Example 1
// let items=[250,645,300,900,50];
// i=0;
// for (let val of items){
//     console.log(`value at index ${i}=${val}`)
//     let offer=val/10;
//     items[i]=items[i]-offer;
//     console.log(`Value after offer =${items[i]}`);
//     i++;
// }

// Example 2
// let items=[250,645,300,900,50];
// for (let i=0;i<items.length;i++){
//     let offer = items[i]/10;
//     items[i]-=offer;
// }
// console.log(items)

// Array Methods
// let fruits = ["Apple", "Banana"];
// fruits.push("Mango");
// console.log(fruits)
// fruits.pop();
// console.log(fruits)
// fruits.unshift("Kiwi");
// console.log(fruits)
// fruits.shift();
// let a = [1, 2];
// let b = [3, 4];
// let c = a.concat(b);
// console.log(c);
// console.log(a);
// console.log(b);

// Slice()
// let arr = [10, 20, 30, 40, 50];
// let part = arr.slice(1, 4);
// console.log(arr);
// console.log(part);

// Splice()
// Remove Elements
// let arr=[10,20,30,40,50]
// arr.splice(1,2);
// console.log(arr)
// Add Elements
// let arr=[10,20,30]
// arr.splice(1,0,15,17);
// console.log(arr )
// Replace Elements
// let arr=[10,20,30];
// arr.splice(1,1,25);
// console.log(arr)

// Create an array to store companies--> "Bloomberg","Microsoft","Uber","Google","IBM","Netflix"
// a. Remove the first company from the array
// let array=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
// array.shift()
// console.log(array)+
// array.splice(2,2,"ola");
// console.log(array)
// array.push("Amazon")
// console.log(array)

// // Map
// let nums = [67, 52, 39];

// let newArr = nums.map((val) => {
//     return val * 2;
// });
// console.log(newArr);

// let calcsquare = (num) => {
//     console.log(num * num);
// };

// calcsquare(5);

// filter
// let arr=[1,2,3,4,5,6,7];
// let evenArr=arr.filter((val)=>{
//     return val%2==0;
// });
// console.log(evenArr)

// Reduce
// // It will give some of array
// let arr = [1, 2, 3, 4];
// const output = arr.reduce((res, curr) => {
//   return res + curr;
// });
// console.log(output);

// Finding Highest number using reduce
// let arr=[5,6,2,1,101,3]
// const output=arr.reduce((prev,curr)=>{
//     return prev>curr?prev:curr;
// })
// console.log(output)
