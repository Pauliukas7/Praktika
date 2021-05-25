function addNumbers(a: number, b: number): number {
  return a + b;
}

var sum = addNumbers(10, 15);
console.log("Sum of the tow numbers is: " + sum);

document.getElementById("app")?.append("Sum of the two numbers is: " + sum);
