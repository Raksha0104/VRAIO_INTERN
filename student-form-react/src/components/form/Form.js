import { useState } from "react";
import SubmitClear from "../Button/SubmitClear";

export default function Form() {
  const [name, setName] = useState("");
  const [registerNum, setRegister] = useState("");
  const [grade, setGrade] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  const handleRegister = (e) => {
    setRegister(e.target.value);
    setSubmitted(false);
  };

  const handleGrade = (e) => {
    setGrade(e.target.value);
    setSubmitted(false);
  };

  const handleClick = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="col-lg-12 col-md-12  col-sm-12 d-flex flex-column"
      id="student-form"
      onSubmit={handleClick}
    >
      <input
        onChange={handleName}
        className="input mb-3"
        type="text"
        placeholder="Name"
      />

      <input
        onChange={handleRegister}
        className="input mb-3"
        type="text"
        placeholder="Register Number"
      />

      <input
        onChange={handleGrade}
        className="input mb-3"
        type="text"
        placeholder="Grade"
      />
      <SubmitClear />
    </form>
  );
}
