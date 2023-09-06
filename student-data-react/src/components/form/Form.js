import { useState } from "react";
import SubmitClear from "../Button/SubmitClear";
import Table from "../Table/Table";

export default function Form() {
  const [name, setName] = useState("");
  const [registerNum, setRegister] = useState("");
  const [grade, setGrade] = useState("");
  const [nameError, setNameError] = useState("");
  const [registerNumError, setRegisterNumError] = useState("");
  const [gradeError, setGradeError] = useState("");

  const handleName = (e) => {
    const value = e.target.value;
    setName(value);

    if (!/^[a-zA-Z\s]+$/.test(value)) {
      setNameError("Name must contain only letters.");
    } else {
      setNameError("");
    }
  };

  const handleRegister = (e) => {
    const value = e.target.value;
    setRegister(value);
    // Validate registerNum for alphanumeric
    if (!/^[a-zA-Z0-9]+$/.test(value)) {
      setRegisterNumError(
        "Register Number must contain only letters and numbers."
      );
    } else {
      setRegisterNumError("");
    }
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
    const value = e.target.value;
    setGrade(value);
    // Validate grade for single character
    if (value.length !== 1 || !/^[a-zA-Z]+$/.test(value)) {
      setGradeError("Grade must be a single letter.");
    } else {
      setGradeError("");
    }
  };
  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();

    if (!name || !registerNum || !grade) {
      if (!name) {
        setNameError("Name is required.");
      }
      if (!registerNum) {
        setRegisterNumError("Register Number is required.");
      }
      if (!grade) {
        setGradeError("Grade is required.");
      }
      return;
    }

    const newUser = {
      // userName: name,
      // userRegisterNum: registerNum,
      // userGrade: grade,
      //The above is one of the way toassign names and add to the table, else
      name,
      registerNum,
      grade,
      //The above is the another way of adding the users deatails
    };
    setUsers([...users, newUser]);

    setName("");
    setRegister("");
    setGrade("");
  };

  const clearFields = () => {
    setName("");
    setRegister("");
    setGrade("");
    setNameError("");
    setRegisterNumError("");
    setGradeError("");
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
          <form onSubmit={addUser}>
            <div className="form-group">
              <input
                onChange={handleName}
                value={name}
                className="form-control mb-3"
                type="text"
                placeholder="Name"
              />
              <div className="text-danger">{nameError}</div>
            </div>
            <div className="form-group">
              <input
                onChange={handleRegister}
                value={registerNum}
                className="form-control mb-3"
                type="text"
                placeholder="Register Number"
              />
              <div className="text-danger">{registerNumError}</div>
            </div>
            <div className="form-group">
              <input
                onChange={handleGrade}
                value={grade}
                className="form-control mb-3"
                type="text"
                placeholder="Grade"
              />
              <div className="text-danger">{gradeError}</div>
            </div>
            <SubmitClear onClear={clearFields} />
          </form>
        </div>
      </div>
      <Table users={users} />
    </>
  );
}
