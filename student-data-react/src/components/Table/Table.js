import React, { useState } from "react";

export default function Table({ users , onUpdate ,onDelete}) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    name: "",
    registerNum: "",
    grade: "",
  });

  const handleEditClick = (index, user) => {
    setEditIndex(index);
    setEditedData({ ...user });
  };

  const handleUpdateClick = (index) => {
    onUpdate(index, editedData);
    setEditIndex(null);
  };

  const handleCancelClick = () => {
    setEditIndex(null);
  };

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
        {/* Add data dynamically into the table */}
        <tbody className="student-list">
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedData.name}
                    onChange={(e) =>
                      setEditedData({ ...editedData, name: e.target.value })
                    }
                  />
                ) : (
                  user.name
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedData.registerNum}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        registerNum: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.registerNum
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    type="text"
                    value={editedData.grade}
                    onChange={(e) =>
                      setEditedData({ ...editedData, grade: e.target.value })
                    }
                  />
                ) : (
                  user.grade
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <>
                    <button
                      className="btn btn-sm btn-success "
                      onClick={() => handleUpdateClick(index)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-sm btn-info my-1 mx-1"
                      onClick={handleCancelClick}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-info"
                      onClick={() => handleEditClick(index, user)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger mx-1"
                      onClick={() => onDelete(index)}
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
          {users.length === 0 && (
            <tr id="noRecordsRow">
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
