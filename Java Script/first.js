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
