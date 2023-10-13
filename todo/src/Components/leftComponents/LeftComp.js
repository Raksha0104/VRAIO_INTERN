import React from "react";
import "../Styles/leftcomp.css";
import "./AllTasks";
import "./CompletedTasks";
import "./ImportantTasks";
import "./TodaysTasks";
import "./UncompletedTasks";
import CenterComp from "../centerComponents/CenterComp";
import RightComp from "../rightComponents/RightComp";
import { Link } from "react-router-dom";

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
      <div className="bg-dark col min-vh-100 justify-content-between">
        <div className="bg-dark py-2 ">
          <div className="d-flex mt-4 mx-3 text-white text-decoration-none align-items-center px-2">
            <span className="fs-5 d-none d-sm-inline">TO-DO LIST</span>
          </div>
          <button className="btn btn-sm btn-info my-4 mx-4">
            Add new task
          </button>
          <ul className="nav nav-pills flex-column mt-1 text-white text-start">
            {NavLinks.map((link, index) => (
              <li className="nav-item mt-3" key={index}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* </div>
      </div> */}
      <CenterComp />
      <RightComp />
    </>
  );
}
