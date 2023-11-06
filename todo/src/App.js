import { BrowserRouter, Routes, Route } from "react-router-dom";
import LeftComp from "./Components/leftComponents/LeftComp";
import TodaysTasks from "./Components/leftComponents/TodaysTasks";
import AllTasks from "./Components/leftComponents/AllTasks";
import ImportantTasks from "./Components/leftComponents/ImportantTasks";
import CompletedTasks from "./Components/leftComponents/CompletedTasks";
import UncompletedTasks from "./Components/leftComponents/UncompletedTasks";
import CenterComp from "./Components/centerComponents/CenterComp";
import RightComp from "./Components/rightComponents/RightComp";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LeftComp />} />
              <Route
                path="/TodaysTasks"
                element={<TodaysTasks LeftComp={<LeftComp />} />}
              />
              <Route
                path="/AllTasks"
                element={<AllTasks LeftComp={<LeftComp />} />}
              />
              <Route
                path="/ImportantTasks"
                element={<ImportantTasks LeftComp={<LeftComp />} />}
              />
              <Route
                path="/CompletedTasks"
                element={<CompletedTasks LeftComp={<LeftComp />} />}
              />
              <Route
                path="/UncompletedTasks"
                element={<UncompletedTasks LeftComp={<LeftComp />} />}
              />
            </Routes>
          </BrowserRouter>
          <CenterComp/>
          <RightComp />
        </div>
      </div>
    </>
  );
}

export default App;
