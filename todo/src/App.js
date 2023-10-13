import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftComp from "./Components/leftComponents/LeftComp";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LeftComp />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
