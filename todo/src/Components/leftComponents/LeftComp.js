import React from "react";
import "../Styles/leftcomp.css";
import "./AllTasks";
import "./CompletedTasks";
import "./ImportantTasks";
import "./TodaysTasks";
import "./UncompletedTasks";
import { Link } from "react-router-dom";
import "../Styles/leftcomp.css";

export default function LeftComp() {
  const NavLinks = [
    { to: "/TodaysTasks", label: "Today's Tasks" },
    { to: "/AllTasks", label: "All Tasks" },
    { to: "/ImportantTasks", label: "Important Tasks" },
    { to: "/CompletedTasks", label: "Completed Tasks" },
    { to: "/UncompletedTasks", label: "Incomplete Tasks" },
  ];
  return (
    <>
      {/* <div className="container-fluid">
        <div className="row flex-nowrap"> */}
      <div className="bg-primary-subtle col-2 min-vh-100 justify-content-between">
        <div className="bg-primary-subtle py-2 ">
          <div className="d-flex mt-4 mx-3 text-dark text-decoration-none align-items-center px-2">
            <span className="fs-5 d-none d-sm-inline">TO-DO LIST</span>
          </div>
          <button className="btn btn-sm btn-info my-4 mx-4">
            Add new task
          </button>
          <ul className="nav nav-pills flex-column mt-1 text-dark text-start">
            {NavLinks.map((link, index) => (
              <li className="nav-item mt-3" key={index}>
                <Link to={link.to}>{link.label} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </div>
      </div> */}
      {/* <CenterComp />
      <RightComp /> */}
    </>
  );
}
