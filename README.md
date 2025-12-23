# 📊 Student Marks Analyzer (JavaScript)

A simple **Student Marks Analyzer** built using **JavaScript**.  
This project demonstrates how to analyze student marks using basic programming concepts like loops, conditionals, and variables.

---

## 🚀 Features

This program performs the following operations:

- ✅ Calculates **total marks**
- 📈 Calculates **average marks**
- 🏆 Finds the **highest mark**
- 📉 Finds the **lowest mark**
- 🎓 Counts how many students **passed** (marks ≥ 40)

---

## 🧠 Concepts Used

- Arrays  
- `for` loops  
- Conditional statements (`if-else`)  
- Basic arithmetic operations  
- Console output  

---

## 🧪 JavaScript Code

```javascript
let marks = [92, 81, 79, 21, 65, 20];
let totalMarks = 0;
let average = 0;
let highest = 0;
let lowest = 0;
let passCount = 0;

// Calculate total marks
for (let i = 0; i < marks.length; i++) {
  totalMarks += marks[i];
}
console.log("The total marks is: ", totalMarks);

// Calculate average marks
average = totalMarks / marks.length;
console.log("The total average is: ", average);

// Find highest and lowest marks
lowest = marks[0];
for (let i = 0; i < marks.length; i++) {
  if (marks[i] > highest) {
    highest = marks[i];
  }
  if (marks[i] < lowest) {
    lowest = marks[i];
  }
}
console.log("The total highest marks is: ", highest);
console.log("The total lowest marks is: ", lowest);

// Count passed students
for (let i = 0; i < marks.length; i++) {
  if (marks[i] >= 40) {
    passCount++;
  }
}
console.log("The number of students that passed the exam is: ", passCount);
---

```

### 🎯 Output Example

Total Marks: 358
<br>
Average Marks: 59.66
<br>
Highest Marks: 92
<br>
Lowest Marks: 20
<br>
Passed Students: 4


---

## ▶️ Run in Browser Console

You can also run this project directly in your browser:

1. Open your browser  
2. Right-click anywhere → **Inspect**  
3. Go to the **Console** tab  
4. Paste the JavaScript code and press **Enter**

---

## 👨‍💻 Author

**Purnendra Kumar**  
Learning JavaScript step by step 🚀
