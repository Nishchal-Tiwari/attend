import React from "react";
import "./App.css";
function Modify_fn() {
  return (
    <>
      <div className="cont">
        <h1 class="mod">MODIFY ATTENDENCE</h1>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Enter Roll No. of Student"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />

          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            Modify Attendance
          </button>
        </div>
      </div>
    </>
  );
}
export default Modify_fn;
