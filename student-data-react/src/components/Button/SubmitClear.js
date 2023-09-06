import React from "react";

export default function SubmitClear(props) {
  const handleClear = () => {
    // You can pass a clear function as a prop from the parent component
    if (props.onClear) {
      props.onClear();
    }
  };

  return (
    <div className="button d-flex">
      <div>
        <input
          type="submit"
          className="btn btn-success add-btn"
          value="Submit"
        />
      </div>
      <div>
        <button className="btn btn-info mx-2" onClick={handleClear}>
          Clear
        </button>
      </div>
    </div>
  );
}
