import "./App.css";
import AllTasks from "./Components/leftComponents/AllTasks";
import LeftComp from "./Components/leftComponents/LeftComp";
// import RightComp from "./Components/rightComponents/RightComp";
// import CenterComp from "./Components/centerComponents/CenterComp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodaysTasks from "./Components/leftComponents/TodaysTasks";
import ImportantTasks from "./Components/leftComponents/ImportantTasks";
import CompletedTasks from "./Components/leftComponents/CompletedTasks";
import UncompletedTasks from "./Components/leftComponents/UncompletedTasks";

function App() {
  return (
    <>
      <div className="d-flex flex-row">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LeftComp />} />
            <Route path="/allTasks" element={<AllTasks />} />
            <Route path="/todaysTasks" element={<TodaysTasks />} />
            <Route path="/importantTasks" element={<ImportantTasks />} />
            <Route path="/completedTasks" element={<CompletedTasks />} />
            <Route path="/uncompletedTasks" element={<UncompletedTasks />} />

            {/* <Route path="/center" element={<CenterComp />} />
            <Route path="/right" element={<RightComp />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
