import React from "react";

export default function SubmitClear() {
  return (
  <div className="button d-flex">
    <div>
    <input type="submit" className="btn btn-success add-btn"/>
    </div>
    <div>
    <input type="reset" className="btn btn-primary add-btn mx-2"/>
    </div>
  </div>
  );
}
