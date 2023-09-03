import { useState } from "react";
import SubmitClear from "../Button/SubmitClear";
import Table from "../Table/Table";

export default function Form() {
  const [name, setName] = useState("");
  const [registerNum, setRegister] = useState("");
  const [grade, setGrade] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleRegister = (e) => {
    setRegister(e.target.value);
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
  };

  const [users, setUsers] = useState([]);

  const addUser = (e) => {
    e.preventDefault();

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

    setName("")
    setRegister("")
    setGrade("")
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
            </div>
            <div className="form-group">
              <input
                onChange={handleRegister}
                value={registerNum}
                className="form-control mb-3"
                type="text"
                placeholder="Register Number"
              />
            </div>
            <div className="form-group">
              <input
                onChange={handleGrade}
                value={grade}
                className="form-control mb-3"
                type="text"
                placeholder="Grade"
              />
            </div>
            <SubmitClear />
          </form>
        </div>
      </div>
      <Table users={users} />
    </>
  );
}
