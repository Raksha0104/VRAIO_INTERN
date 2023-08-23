document.addEventListener("DOMContentLoaded", function () {
  const studentForm = document.getElementById("student-form");
  // const studentList = document.querySelector(".student-list");

  studentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("name").value;
    const registerNoInput = document.getElementById("registerNo").value;
    const gradeInput = document.getElementById("grade").value;

    const nameRegex = /^[a-zA-Z]+$/;
    const registerNoRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/;
    const gradeRegex = /^\d$/;

    if (nameInput && registerNoInput && gradeInput) {
      const nameIsValid = nameRegex.test(nameInput);
      const registerNoIsValid = registerNoRegex.test(registerNoInput);
      const gradeIsValid = gradeRegex.test(gradeInput);

      if (!nameIsValid) {
        document.getElementById("name").classList.add("is-invalid");
        document.getElementById("errorMessageName").innerText =
          "Use characters only";
        document.getElementById("errorMessageName").focus();
      } else {
        document.getElementById("name").classList.remove("is-invalid");
        document.getElementById("errorMessageName").innerText = "";
      }

      if (!registerNoIsValid) {
        document.getElementById("registerNo").classList.add("is-invalid");
        document.getElementById("errorMessageRegNo").innerText =
          "Enter alphanumerics only";
        document.getElementById("errorMessageRegNo").focus();
      } else {
        document.getElementById("registerNo").classList.remove("is-invalid");
        document.getElementById("errorMessageRegNo").innerText = "";
      }

      if (!gradeIsValid) {
        document.getElementById("grade").classList.add("is-invalid");
        document.getElementById("errorMessageGrade").innerText =
          "Enter only one digit";
        document.getElementById("errorMessageGrade").focus();
      } else {
        document.getElementById("grade").classList.remove("is-invalid");
        document.getElementById("errorMessageGrade").innerText = "";
      }

      if (
        nameInput &&
        registerNoInput &&
        gradeInput &&
        nameIsValid &&
        registerNoIsValid &&
        gradeIsValid
      ) {
        addStudent(nameInput, registerNoInput, gradeInput);
        document.getElementById("name").classList.remove("is-invalid");
        document.getElementById("errorMessageName").innerText = "";
        document.getElementById("registerNo").classList.remove("is-invalid");
        document.getElementById("errorMessageRegNo").innerText = "";
        document.getElementById("grade").classList.remove("is-invalid");
        document.getElementById("errorMessageGrade").innerText = "";
      }
    } else {
      if (nameInput === "") {
        document.getElementById("name").classList.add("is-invalid");
        document.getElementById("errorMessageName").innerText = "Enter name";
        document.getElementById("errorMessageName").focus();
      }

      if (registerNoInput === "") {
        document.getElementById("registerNo").classList.add("is-invalid");
        document.getElementById("errorMessageRegNo").innerText = "Enter name";
        document.getElementById("errorMessageRegNo").focus();
      }

      if (gradeInput === "") {
        document.getElementById("grade").classList.add("is-invalid");
        document.getElementById("errorMessageGrade").innerText = "Enter Grade";
        document.getElementById("errorMessageGrade").focus();
      }
    }
  });

  studentForm.addEventListener("reset", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("name");
    const registerNoInput = document.getElementById("registerNo");
    const gradeInput = document.getElementById("grade");

    nameInput.value = "";
    registerNoInput.value = "";
    gradeInput.value = "";

    document.getElementById("errorMessageName").innerHTML = "";
    document.getElementById("errorMessageRegNo").innerHTML = "";
    document.getElementById("errorMessageGrade").innerHTML = "";
  });

  function addStudent(name, registerNo, grade) {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td class="name-cell">${name}</td>
            <td class="register-no-cell">${registerNo}</td>
            <td class="grade-cell">${grade}</td>
            <td class="action-cell">
                <button class="btn btn-warning btn-sm edit-btn">Edit</button>
                <button class="btn btn-danger btn-sm delete-btn">Delete</button>
            </td>
        `;

    const deleteButton = row.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      studentList.removeChild(row);
      sortTable();
    });

    // const editButton = row.querySelector(".edit");
    // editButton.addEventListener("click", function () {
    //     document.getElementById("name").value = name;
    //     document.getElementById("registerNo").value = registerNo;
    //     document.getElementById("grade").value = grade;

    //     let nameUpt = rows.cells[0];
    //     let regUpt = rows.cells[1];
    //     let gradeUpt = rows.cells[2];

    //     nameUpt.innerHTML = name;
    //     regUpt.innerHTML = registerNo;
    //     gradeUpt.innerHTML = grade;

    //     addStudent(name, registerNo, grade);
    //     studentList.removeChild(row);
    //     sortTable();
    // });

    studentList.addEventListener("click", function (event) {
      const target = event.target;

      if (target.classList.contains("edit-btn")) {
        handleEditButtonClick(target);
      } else if (target.classList.contains("update-btn")) {
        handleUpdateButtonClick(target);
      } else if (target.classList.contains("cancel-btn")) {
        handleCancelButtonClick(target);
      }
    });

    function handleEditButtonClick(editBtn) {
      const row = editBtn.closest("tr");
      const updateBtn = document.createElement("button");
      updateBtn.classList.add("btn", "btn-sm", "btn-warning", "update-btn");
      updateBtn.textContent = "Update";

      const cancelBtn = document.createElement("button");
      cancelBtn.classList.add("btn", "btn-sm", "btn-primary", "cancel-btn");
      cancelBtn.textContent = "Cancel";

      const actionCell = row.querySelector(".action-cell");
      actionCell.innerHTML = "";
      actionCell.appendChild(updateBtn);
      actionCell.appendChild(cancelBtn);

      const nameCell = row.querySelector(".name-cell");
      const registerNoCell = row.querySelector(".register-no-cell");
      const gradeCell = row.querySelector(".grade-cell");

      const nameValue = nameCell.textContent;
      const registerNoValue = registerNoCell.textContent;
      const gradeValue = gradeCell.textContent;

      nameCell.innerHTML = `<input type="text" class="form-control" value="${nameValue}">`;
      registerNoCell.innerHTML = `<input type="text" class="form-control" value="${registerNoValue}">`;
      gradeCell.innerHTML = `<input type="text" class="form-control" value="${gradeValue}">`;
    }

    function handleUpdateButtonClick(updateBtn) {
      const row = updateBtn.closest("tr");
      const nameInput = row.querySelector(".name-cell input");
      const registerNoInput = row.querySelector(".register-no-cell input");
      const gradeInput = row.querySelector(".grade-cell input");

      const nameValue = nameInput.value;
      const registerNoValue = registerNoInput.value;
      const gradeValue = gradeInput.value;

      const nameCell = row.querySelector(".name-cell");
      const registerNoCell = row.querySelector(".register-no-cell");
      const gradeCell = row.querySelector(".grade-cell");
      const actionCell = row.querySelector(".action-cell");

      nameCell.textContent = nameValue;
      registerNoCell.textContent = registerNoValue;
      gradeCell.textContent = gradeValue;

      actionCell.innerHTML = "";
      const editBtn = document.createElement("button");
      editBtn.classList.add("btn", "btn-sm", "btn-warning", "edit-btn");
      editBtn.textContent = "Edit";
      actionCell.appendChild(editBtn);

      actionCell.appendChild(document.createTextNode(" "));

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "delete-btn");
      deleteBtn.textContent = "Delete";
      actionCell.appendChild(deleteBtn);
    }

    function handleCancelButtonClick(cancelBtn) {
      const row = cancelBtn.closest("tr");
      const nameInput = row.querySelector(".name-cell input");
      const registerNoInput = row.querySelector(".register-no-cell input");
      const gradeInput = row.querySelector(".grade-cell input");

      const nameValue = nameInput.getAttribute("value");
      const registerNoValue = registerNoInput.getAttribute("value");
      const gradeValue = gradeInput.getAttribute("value");

      const nameCell = row.querySelector(".name-cell");
      const registerNoCell = row.querySelector(".register-no-cell");
      const gradeCell = row.querySelector(".grade-cell");
      const actionCell = row.querySelector(".action-cell");

      nameCell.textContent = nameValue;
      registerNoCell.textContent = registerNoValue;
      gradeCell.textContent = gradeValue;

      actionCell.innerHTML = "";
      const editBtn = document.createElement("button");
      editBtn.classList.add("btn", "btn-sm", "btn-warning", "edit-btn");
      editBtn.textContent = "Edit";
      actionCell.appendChild(editBtn);

      actionCell.appendChild(document.createTextNode(" "));

      const deleteBtn = document.createElement("button");
      deleteBtn.classList.add("btn", "btn-sm", "btn-danger", "delete-btn");
      deleteBtn.textContent = "Delete";
      actionCell.appendChild(deleteBtn);
    }

    studentList.appendChild(row);
    sortTable();
  }

  // function sortTable() {
  //     const rows = Array.from(studentList.getElementsByTagName("tr"));
  //     rows.shift();

  //     rows.sort((a, b) => {
  //         const nameA = a.cells[0].textContent.trim().toLowerCase();
  //         const nameB = b.cells[0].textContent.trim().toLowerCase();
  //         return nameA.localeCompare(nameB);
  //     });

  //     for (const row of rows) {
  //         studentList.appendChild(row);
  //     }
  // }

  const tableHeaders = document.querySelectorAll(".table th");
  const studentList = document.querySelector(".student-list");
  let sortColumn = null;
  let sortOrder = "asc";

  tableHeaders.forEach((header, index) => {
    header.addEventListener("click", function () {
      sortTable(index);
    });
  });

  function sortTable(columnIndex) {
    const rows = Array.from(studentList.getElementsByTagName("tr"));

    rows.sort((a, b) => {
      const valueA = a
        .getElementsByTagName("td")
        [columnIndex].textContent.trim();
      const valueB = b
        .getElementsByTagName("td")
        [columnIndex].textContent.trim();

      if (valueA === valueB) return 0;
      if (sortOrder === "asc") {
        return valueA.localeCompare(valueB);
      } else {
        return valueB.localeCompare(valueA);
      }
    });
    studentList.innerHTML = "";
    rows.forEach((row) => studentList.appendChild(row));
    sortOrder = sortOrder === "asc" ? "desc" : "asc";
    sortColumn = columnIndex;
  }
});
