let marks = [92, 81, 79, 21, 65, 20];
let totalMarks = 0;
let average = 0;
let highest = 0;
let lowest = 0;
let passCount = 0;

for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
}
console.log("The total marks is: ", totalMarks);

for (let i = 0; i < marks.length; i++) {
  average = totalMarks / marks.length;
}

console.log("The total average is: ", average);

for (let i = 0; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  } else {
    lowest = marks[0];
  }
}
console.log("The total highest marks of is: ", highest);
console.log("The total lowest marks is: ", lowest);

for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 40) {
    passCount++;
  }
}
console.log("The number of students that passed the exam is: ", passCount);
