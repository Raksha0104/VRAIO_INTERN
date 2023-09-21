import "./App.css";
import LeftComp from "./Components/leftComponents/LeftComp";
import RightComp from "./Components/rightComponents/RightComp";
import CenterComp from "./Components/centerComponents/CenterComp";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="d-flex flex-row">
        <LeftComp />
        <CenterComp />
        <RightComp />
      </div>
    </>
  );
}

export default App;
