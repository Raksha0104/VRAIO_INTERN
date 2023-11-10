import React from "react";

import "../Styles/centercomp.css";
import CenterTop from "./CenterTop";

export default function CenterComp() {
  return (
    <>
      <div className="col-8">
        <div className="container text-center">
          <CenterTop />
        </div>
      </div>
    </>
  );
}
