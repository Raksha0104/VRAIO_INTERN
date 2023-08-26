document.addEventListener("DOMContentLoaded", function () {
  //Create variable-name and assign the form and list on which the operations are to be performed.
  const studentForm = document.getElementById("student-form");
  const studentList = document.querySelector(".student-list");

  //Operations to be performed onClick of Submit button.
  studentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nameInput = document.getElementById("name").value;
    const registerNoInput = document.getElementById("registerNo").value;
    const gradeInput = document.getElementById("grade").value;

    //Validate the form for the following conditions.
    const nameRegex = /^[a-zA-Z]+$/; //Consists only characters.
    const registerNoRegex = /^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$/; //Consists AlphaNumeric Values.
    const gradeRegex = /^[a-zA-Z]+$/; //Consists only character.

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
      //Add student data if validation is succesful.
      if (
        nameInput &&
        registerNoInput &&
        gradeInput &&
        nameIsValid &&
        registerNoIsValid &&
        gradeIsValid
      ) {
        addStudent(nameInput, registerNoInput, gradeInput);
      }
    }
    //Check for empty fields.
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
  });

  //Operation to be performed onClick for Clear button.
  studentForm.addEventListener("reset", function (event) {
    event.preventDefault();
    clearFields();
  });

  //Operations to be performed to clear the error messages and empty the fields.
  function clearFields() {
    const nameInput = document.getElementById("name");
    const registerNoInput = document.getElementById("registerNo");
    const gradeInput = document.getElementById("grade");

    nameInput.value = "";
    registerNoInput.value = "";
    gradeInput.value = "";

    document.getElementById("errorMessageName").innerHTML = "";
    document.getElementById("errorMessageRegNo").innerHTML = "";
    document.getElementById("errorMessageGrade").innerHTML = "";
  }

  //Function to add student data in the table dynamically.

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

    clearFields();
    //Remove the field/row containing data onClick of delete button.
    const deleteButton = row.querySelector(".delete-btn");
    deleteButton.addEventListener("click", function () {
      studentList.removeChild(row);
      sortTable();
    });
    //To edit the data in the table:
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
    //Replace the edit button with update and cancel buuton to edit the data in the table.
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
    // Update the data and replace the button back with edit and delete buttons
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
    // Do not make changes and get back to the original data.
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

  const tableHeaders = document.querySelectorAll(".table th");
  let sortColumn = null;
  let sortOrder = "asc";
  // Add click function on the table headers and sort the table accordingly.
  tableHeaders.forEach((header, index) => {
    header.addEventListener("click", function () {
      sortTable(index);
    });
  });
  // Sorting of table based on characters and numbers in ascending and descending order.
  function sortTable(columnIndex) {
    const rows = Array.from(studentList.getElementsByTagName("tr"));

    const arrow = sortOrder === "asc" ? "&#9650;" : "&#9660;";
    tableHeaders[columnIndex].querySelector(".arrow-icon").innerHTML = arrow;
    tableHeaders[columnIndex]
      .querySelector(".arrow-icon")
      .classList.add("rotate");

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
