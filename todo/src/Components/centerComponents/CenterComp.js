import React from "react";

import "../Styles/centercomp.css";
import CenterTop from "./CenterTop";

export default function CenterComp() {
  // const ViewSwitcher = () => {
  //   const [isListView, setViewList] = useState(true);
  //   const toggleView = () => {
  //     setViewList(!isListView);
  //   };
  // };

  return (
    <>
      <div className="col-8">
        <div className="container text-center">
          <CenterTop />
          <div className="addnewtask-modal">
            <ul className="tasksList mt-4 grid gap-2 sm:gap-4 xl:gap-6 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 items-end"></ul>
          </div>
        </div>
      </div>
    </>
  );
}
