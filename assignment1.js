console.log("loaded");

// Declare variables
let rowNum;
let colNum;
let table;
let btn;

// Initialize variables with DOM references
rowNum = document.getElementById("rowNum");
colNum = document.getElementById("colNum");
table = document.getElementById("multTable");
btn = document.getElementById("btn");

// Add event listener to button
btn.addEventListener("click", generateTable);

// Declare function
function generateTable() {
  // Get row, col values
  let r = rowNum.value;
  let c = colNum.value;

  // Clear table child elements
  table.innerHTML = "";

  for (let i = 0; i < r; i++) {
    let row = document.createElement("tr");

    for (let j = 0; j < c; j++) {
      let col = document.createElement("td");
      col.innerHTML = `${i + 1} x ${j + 1} = ${(i + 1) * (j + 1)}`;
      row.appendChild(col);
    }

    table.appendChild(row);
  }

  console.log("Table generated...");
}
