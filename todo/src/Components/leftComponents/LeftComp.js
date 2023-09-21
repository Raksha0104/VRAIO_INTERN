import React from "react";
import "../Styles/leftcomp.css";
import { Link } from "react-router-dom";

export default function LeftComp() {
  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="bg-dark col-auto col-md-4 col-lg-2 min-vh-100 justify-content-between">
            <div className="bg-dark p-2 ">
              <div className="d-flex mt-4 mx-3 text-white text-decoration-none align-items-center px-2">
                <span className="fs-5 d-none d-sm-inline">TO-DO LIST</span>
              </div>
              <button className="btn btn-sm btn-info my-4 mx-4">
                Add new task
              </button>
              <ul className="nav nav-pills flex-column mt-1 text-white text-start">
                <li className="nav-item mt-3">Today's Tasks</li>
                <li className="nav-item mt-3">All Tasks</li>
                <li className="nav-item mt-3">Important Tasks</li>
                <li className="nav-item mt-3">Completed Tasks</li>
                <li className="nav-item mt-3">Incomplete Tasks</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
