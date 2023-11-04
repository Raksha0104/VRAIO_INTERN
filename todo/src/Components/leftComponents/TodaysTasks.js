import CenterTop from "../centerComponents/CenterTop";
import RightComp from "../rightComponents/RightComp";
import LeftComp from "./LeftComp";

export default function TodaysTasks() {
  return (
    <>
    <LeftComp />
      <div className="col-8">
        <div className="container text-center">
          <CenterTop />
        </div>
      </div>
      <RightComp />
    </>
  );
}
