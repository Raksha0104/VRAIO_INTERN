import React, { useState } from "react";
import UpdateUser from "./UpdateUser";
import axios from "axios";
import RemoveUser from "./RemoveUser";

function AddUser() {
  const [name, setName] = useState({
    name: " ",
  });

  const handleChange = (e) => {
    e.preventDefault();

    setName({
      name: e.target.value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { name })
      .then((res) => {
        alert('user added successfully')
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <p>Add Users</p>
      <div>
        <form onSubmit={submitForm}>
          <label>
            User Name:
            <input type="text" name="name" onChange={handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
      <UpdateUser />
      <RemoveUser />
    </div>
  );
}

export default AddUser;
