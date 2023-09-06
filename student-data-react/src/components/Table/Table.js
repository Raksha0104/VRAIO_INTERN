import React, { useState } from "react";
import "./Table.module.css"

export default function Table({ users, onUpdate, onDelete }) {
  const [editIndex, setEditIndex] = useState(null);
  const [editedData, setEditedData] = useState({
    name: "",
    registerNum: "",
    grade: "",
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

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

  const handleHeaderClick = (column) => {
    if (sortColumn === column) {
      // Toggle sort direction if the same column is clicked again
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      // Set a new column to sort
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const sortedUsers = [...users].sort((a, b) => {
    if (sortColumn) {
      if (sortDirection === "asc") {
        return a[sortColumn].localeCompare(b[sortColumn]);
      } else {
        return b[sortColumn].localeCompare(a[sortColumn]);
      }
    }
    return 0;
  });

  const arrowIconStyle = {
    display: "inline-block",
    width: "10px",
    height: "10px",
    marginLeft: "5px",
    transition: "transform 0.3s ease",
    transform: sortDirection === "asc" ? "rotate(0deg)" : "rotate(180deg)",
  };

  const filteredUsers = sortedUsers.filter((user) => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    return (
      user.name.toLowerCase().includes(lowerCaseQuery) ||
      user.registerNum.toLowerCase().includes(lowerCaseQuery) ||
      user.grade.toLowerCase().includes(lowerCaseQuery)
    );
  });

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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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
            <th scope="col" onClick={() => handleHeaderClick("name")}>
              Name
              <span style={arrowIconStyle}>&uarr;</span>
            </th>
            <th scope="col" onClick={() => handleHeaderClick("registerNum")}>
              Register Number
              <span style={arrowIconStyle}>&uarr;</span>
            </th>
            <th scope="col" onClick={() => handleHeaderClick("grade")}>
              Grade
              <span style={arrowIconStyle}>&uarr;</span>
            </th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {/* Add data dynamically into the table */}
        <tbody className="student-list">
          {filteredUsers.map((user, index) => (
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
          {searchQuery && filteredUsers.length === 0 && (
            <tr id="noRecordsRow">
              <td colSpan="4" className="text-danger">
                No records found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
