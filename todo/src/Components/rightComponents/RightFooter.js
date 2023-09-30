import "../Styles/rightcomp.css";
export default function RightFooter() {
  return (
    <>
      <footer className="footer bg-dark">
        <div className="bg-dark d-flex flex-column">
          <div className="px-5 my-1">
            <button className="btn btn-sm btn-danger">Delete all data</button>
          </div>
          <hr className="hr my-2"/>
          <div className="px-5 my-1">
            <button className="btn btn-sm btn-success">
              <a href="https://github.com/Raksha0104/VRAIO_INTERN/tree/main/todo" className="text-white">
                Raksha0104
              </a>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
}
