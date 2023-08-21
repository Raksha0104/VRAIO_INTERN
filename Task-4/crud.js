document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const studentList = document.querySelector(".student-list");

    studentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = document.getElementById("name");
        const registerNoInput = document.getElementById("registerNo");
        const gradeInput = document.getElementById("grade");

        const name = nameInput.value;
        const registerNo = registerNoInput.value;
        const grade = gradeInput.value;

        if (name && registerNo && grade) {
            addStudent(name, registerNo, grade);
            // nameInput.value = "";
            // registerNoInput.value = "";
            // gradeInput.value = "";
        }
    });

    function addStudent(name, registerNo, grade) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${name}</td>
            <td>${registerNo}</td>
            <td>${grade}</td>
            <td>
                <button class="btn btn-warning btn-sm edit">Edit</button>
                <button class="btn btn-danger btn-sm delete">Delete</button>
            </td>
        `;

        const deleteButton = row.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            studentList.removeChild(row);
            sortTable();
        });

        const editButton = row.querySelector(".edit");
        editButton.addEventListener("click", function () {
            // Set form values with row data for editing
            document.getElementById("name").value = name;
            document.getElementById("registerNo").value = registerNo;
            document.getElementById("grade").value = grade;

            // Remove the row from the table
            studentList.removeChild(row);
            sortTable();
        });

        studentList.appendChild(row);
        sortTable();
    }

    function sortTable() {
        const rows = Array.from(studentList.getElementsByTagName("tr"));
        rows.shift(); // Remove table header row

        rows.sort((a, b) => {
            const nameA = a.cells[0].textContent.trim().toLowerCase();
            const nameB = b.cells[0].textContent.trim().toLowerCase();
            return nameA.localeCompare(nameB);
        });

        for (const row of rows) {
            studentList.appendChild(row);
        }
    }
});
