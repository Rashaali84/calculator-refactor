// test cases for your doMath function
// these are all correct, you don't need to change them
const doMathTests = [
  { name: "add - 1", args: ["add", 0, 0], expected: 0 },
  { name: "add - 2", args: ["add", -4, 3], expected: -1 },
  { name: "add - 3", args: ["add", -5, -1], expected: -6 },
  { name: "min - 1", args: ["min", 1, 0], expected: 1 },
  { name: "min - 2", args: ["min", 2, 1], expected: 1 },
  { name: "min - 3", args: ["min", -5, -1], expected: -4 },
  { name: "div - 1", args: ["div", 4, 2], expected: 2 },
  { name: "div - 2", args: ["div", 3, 2], expected: 1.5 },
  { name: "div - 3", args: ["div", 1, 4], expected: 0.25 },
  { name: "mul - 1", args: ["mul", 3, 2], expected: 6 },
  { name: "mul - 2", args: ["mul", 8, 0], expected: 0 },
  { name: "mul - 3", args: ["mul", -1, -1], expected: 1 },
  { name: "invalid - 1", args: ["tree", 0, 0], expected: "invalid operation" },
  { name: "invalid - 2", args: ["book", 0, 0], expected: "invalid operation" },
  { name: "invalid - 3", args: ["minus", 0, 0], expected: "invalid operation" }
  // write 7 more test cases for doMath
];

// refactor the logic from the calculator tutorial into this function
function doMath(operation, a, b) {
  // these if statements make sure all arguments are the correct type
  // they will throw errors if your handler does not parseInt the user input
  console.log(a);
  console.log(b);
  console.log(operation);

  if (typeof operation !== "string") {
    throw new Error("operation should be a string.");
  } else if (
    !(
      operation === "add" ||
      operation === "min" ||
      operation === "div" ||
      operation === "mul"
    )
  ) {
    return "invalid operation";
  } else if (typeof a !== "number") {
    throw new Error("Value1 should be a number.");
  } else if (typeof b !== "number") {
    throw new Error("Value2 should be a number.");
  } else {
    // write your code below this comment:
    var calculate;
    var a = parseInt(a);
    var b = parseInt(b);
    if (operation === "add") {
      calculate = a + b;
    } else if (operation === "min") {
      calculate = a - b;
    } else if (operation === "div") {
      calculate = a / b;
    } else if (operation === "mul") {
      calculate = a * b;
    }
    console.log(calculate);
    return calculate;
  }
}

testing(doMath, doMathTests);
