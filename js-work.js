let totalMarks = 0;

for (let i = 0; i < 5; i++) {
  let mark = prompt("Enter mark to be averaged: ");
  mark = parseFloat(mark);
}

if (!isNaN(mark)) {
  total += mark;
} else {
  alert("Invalid input!");
  i--;
}

const avg = totalMarks / 5;

document.write(<h1>Total: ${totalMarks}</h1>);
document.write(<h1>Average: ${avg}</h1>);
