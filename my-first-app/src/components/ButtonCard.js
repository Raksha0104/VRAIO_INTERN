import React from "react";

export default function ButtonCard(props) {
  return (
      <div className="d-flex justify-content-between align-items-center">
        <div className="btn-group">
          <button className="btn btn-sm btn-outline-secondary">View</button>
          <button className="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small className="text-muted">{props.time}</small>
      </div>
  );
}
