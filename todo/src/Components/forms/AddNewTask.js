import React, { useState } from "react";

export default function AddNewTask() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className="modal fade"
        id="addTaskModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="addModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addModalLabel">
                Add a task
              </h5>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group">
                  <label htmlFor="title" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-info"
                onClick={closeModal}
              >
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
