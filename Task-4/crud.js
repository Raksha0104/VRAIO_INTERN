document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const studentList = document.querySelector(".student-list");

    studentForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const nameInput = document.getElementById("name").value;
        const registerNoInput = document.getElementById("registerNo").value;
        const gradeInput = document.getElementById("grade").value;

        if(nameInput && registerNoInput && gradeInput){
            addStudent(nameInput,registerNoInput,gradeInput);
            document.getElementById("name").classList.remove("is-invalid");
            document.getElementById("errorMessageName").innerText ="";
            document.getElementById("registerNo").classList.remove("is-invalid");
            document.getElementById("errorMessageRegNo").innerText ="";
            document.getElementById("grade").classList.remove("is-invalid");
            document.getElementById("errorMessageGrade").innerText ="";
            
        }else{
            if(nameInput===""){
                document.getElementById("name").classList.add("is-invalid");
                document.getElementById("errorMessageName").innerText ="Enter name";
                document.getElementById("errorMessageName").focus();
            }
    
            if(registerNoInput===""){
                document.getElementById("registerNo").classList.add("is-invalid");
                document.getElementById("errorMessageRegNo").innerText ="Enter name";
                document.getElementById("errorMessageRegNo").focus();
            }
    
            if(gradeInput===""){
                document.getElementById("grade").classList.add("is-invalid");
                document.getElementById("errorMessageGrade").innerText ="Enter Grade";
                document.getElementById("errorMessageGrade").focus();
            }
        }
        });

    studentForm.addEventListener("reset", function (event){
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
            document.getElementById("name").value = name;
            document.getElementById("registerNo").value = registerNo;
            document.getElementById("grade").value = grade;

            let nameUpt = rows.cells[0];
            let regUpt = rows.cells[1];
            let gradeUpt = rows.cells[2];

            nameUpt.innerHTML = name;
            regUpt.innerHTML = registerNo;
            gradeUpt.innerHTML = grade;

            addStudent(name, registerNo, grade);
            studentList.removeChild(row);
            sortTable();
        });

        studentList.appendChild(row);
        sortTable();
    }

    function sortTable() {
        const rows = Array.from(studentList.getElementsByTagName("tr"));
        rows.shift();

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