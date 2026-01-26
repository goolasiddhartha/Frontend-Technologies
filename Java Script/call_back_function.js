// Synchronous call back function
// function Test_case_1(name, callback) {
//   console.log("Hello This is ", name);
//   callback();
// }
// function Test_case_2() {
//   console.log("Calling Function is Running");
// }
// Test_case_1("Siddhartha", Test_case_2);

// Asynchronous call back function
function Test_case1() {
  console.log("This is Test_case1 Function");
}
function Test_case2(name) {
  console.log("Name of the language", name);
}
setTimeout(Test_case1, 3000);
Test_case2("JavaScript");
