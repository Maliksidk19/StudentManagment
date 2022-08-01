const recordTable = document.getElementById("recordTable");
const updateBtn = document.getElementById("updateRecord");
const studentdData = [
  {
    name: "dsahjgdas",
    email: "jsadas@jasd.co",
    marks: "342",
  },
];

// Student Data Record
const stdName = document.getElementById("stdName");
const stdID = document.getElementById("stdId");
const stdDate = document.getElementById("stdDate");
const stdEmail = document.getElementById("stdEmail");
const stdMarks = document.getElementById("stdMarks");

let stdData = 0;
let id = 0;

let newDate = new Date();

function createTableBody() {
  let stud = studentdData[stdData];

  let tBody = document.createElement("tbody");

  let tableRow = document.createElement("tr");

  let tableData1 = document.createElement("td");
  tableData1.id = "stdId";
  tableData1.innerText = id + 1;
  let tableData2 = document.createElement("td");
  tableData2.id = "stdName";
  tableData2.innerText = stud.name;
  let tableData3 = document.createElement("td");
  tableData3.id = "stdEmail";
  tableData3.innerText = stud.email;
  let tableData4 = document.createElement("td");
  tableData4.id = "stdMarks";
  tableData4.innerText = stud.marks;
  let tableData5 = document.createElement("td");
  tableData5.id = "stdDate";
  tableData5.innerText = `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
  let tableData6 = document.createElement("td");
  let delBtn = document.createElement("a");
  delBtn.href = "#";
  delBtn.className = "btn btn-danger btn-sm d-none";
  delBtn.id = "delete";
  delBtn.innerText = "X";

  tableData6.appendChild(delBtn);
  tableRow.appendChild(tableData1);
  tableRow.appendChild(tableData2);
  tableRow.appendChild(tableData3);
  tableRow.appendChild(tableData4);
  tableRow.appendChild(tableData5);
  tableRow.appendChild(tableData6);

  tBody.appendChild(tableRow);

  updateBtn.addEventListener("click", () => {
    recordTable.appendChild(tBody);
  });
}

// userEntered Data
const createBtn = document.getElementById("createRecord");
const userEnteredName = document.getElementById("name");
const userEnteredEmail = document.getElementById("email");
const userEnteredMarks = document.getElementById("marks");

createBtn.addEventListener("click", () => {
  if (
    userEnteredEmail.value !== "" &&
    userEnteredName.value !== "" &&
    userEnteredMarks.value !== ""
  ) {
    studentdData.push({
      name: userEnteredName.value,
      email: userEnteredEmail.value,
      marks: userEnteredMarks.value,
    });
    // localStorage.setItem("studentData", JSON.stringify(studentdData));
    stdData++;

    if (stdData < studentdData.length) {
      createTableBody();
    }
    id++;
  }

  userEnteredEmail.value = "";
  userEnteredName.value = "";
  userEnteredMarks.value = "";
});
