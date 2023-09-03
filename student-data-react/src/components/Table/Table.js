import React from "react";

export default function Table({ users }) {
  return (
    <>
      <div className="col-12 mt-5">
        <div className="row">
          <div className="container d-flex px-0 justify-content-between">
            <div className="col-lg-10 col-md-0 col-sm-0 mb-2 px-2">
              <h4> Student Record</h4>
            </div>
            <div className="col-lg-10 col-md-0 col-sm-0">
              <input
                type="text"
                class="text-center"
                placeholder="search"
                id="myInput"
                onkeyup="searchFunc();"
              />
            </div>
          </div>
        </div>
      </div>
      <table
        className="table table-striped table-bordered text-center"
        id="table"
      >
        <thead>
          <tr>
            <th scope="col">
              Name
              <span class="arrow-icon rotate"></span>
            </th>
            <th scope="col">
              Register Number
              <span class="arrow-icon rotate"></span>
            </th>
            <th scope="col">
              Grade
              <span class="arrow-icon rotate"></span>
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody className="student-list">
          {/* Add data dynamically into the table */}
          {users.map((user,index) => {
            return(
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.registerNum}</td>
                <td>{user.grade}</td>
                <td>
                  <button className="btn btn-info">Edit</button>
                  <button className="btn btn-danger mx-1">Delete</button>
                </td>
              </tr>
            )
          })}
          {users.length === 0 && (<tr id="noRecordsRow">
            <td colspan="4" class="text-danger" style={{ display: "none" }}>
              No records found.
            </td>
          </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
