const recordTable = document.getElementById("recordTable");
const userEnteredName = document.getElementById("name");
const userEnteredEmail = document.getElementById("email");
const userEnteredMarks = document.getElementById("marks");
const createBtn = document.getElementById("createRecord");
const deleteBtn = document.getElementById("deleteRecord");
const delBtn = document.querySelectorAll("#delete");
const studentdData = [];

if (localStorage.getItem("studentData") !== null) {
  studentdData.push(...JSON.parse(localStorage.getItem("studentData")));
}

let stdData = -1;
let id = 0;

let newDate = new Date();

function createTableBody() {
  let stud = JSON.parse(localStorage.getItem("studentData"))[stdData];

  let tBody = document.createElement("tbody");

  let tableRow = document.createElement("tr");

  let tableData1 = document.createElement("td");
  tableData1.id = "stdId";
  tableData1.innerText = id;
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
  let delBtn = document.createElement("button");
  delBtn.className = "btn btn-danger btn-sm";
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

  recordTable.appendChild(tBody);
}

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
    localStorage.setItem("studentData", JSON.stringify(studentdData));

    stdData++;
    id++;
    createTableBody();
  }

  userEnteredEmail.value = "";
  userEnteredName.value = "";
  userEnteredMarks.value = "";
});

document.addEventListener("DOMContentLoaded", (e) => {
  let studentData = JSON.parse(localStorage.getItem("studentData"));
  if (studentData) {
    studentData.forEach((stud, index) => {
      stdData++;
      id++;
      createTableBody();
    });
  }
});

deleteBtn.addEventListener("click", () => {
  delBtn.forEach((del) => {
    del.classList.toggle("d-none");
  });
});

delBtn.forEach((del) => {
  del.addEventListener("click", (e) => {
    let studentData = JSON.parse(localStorage.getItem("studentData"));
    if (studentData) {
      studentData.forEach((stud, index) => {
        if (
          stud.id == e.target.parentElement.parentElement.children[0].innerText
        ) {
          studentData.splice(index, 1);
          localStorage.setItem("studentData", JSON.stringify(studentData));
          location.reload();
        }
      });
    }
  });
});
