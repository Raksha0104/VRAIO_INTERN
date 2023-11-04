import "../Styles/rightcomp.css";

export default function RightComp() {
  return (
    <>
      <div className="col-2 ">
        <section className="bg-primary-subtle text-dark min-vh-100 px-0">
          <div className="d-flex flex-row justify-content-between p-2">
            <div className="d-flex flex-row">
              <div className="item text-center mt-3 mx-3">
                <h5 className="mx-4 py-2">Hii, User!</h5>
              </div>
              <div className="my-3">
                <img
                  src="../user.png"
                  alt="..."
                  className="img-thumbnail bg-info"
                ></img>
              </div>
            </div>
          </div>
          <hr className="mt-0" />
          <div className="d-flex flex-row justify-content-between px-1 mx-2">
            <div>
              <h6>Darkmode</h6>
            </div>
            <div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  // checked={isToggled}
                  // onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-between px-2 mx-1 mt-2">
            <div>
              <h6>All Tasks </h6>
            </div>
            <div>
              <h6>2/3</h6>
            </div>
          </div>
          <div
            className="progress justify-content-betwee mt-1 mx-2"
            role="progressbar"
            aria-label="Progress"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
          >
            <div className="progress-bar bg-info w-75"></div>
          </div>
          <hr className="my-4" />
          <div className="mx-3">
            <h6>No Tasks Today</h6>
          </div>
        </section>
        <footer>
          
        </footer>
      </div>
    </>
  );
}
