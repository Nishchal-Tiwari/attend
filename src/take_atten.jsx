import React from "react";
import data from "./data_set";
import Student from "./student_chart";
import "./App.css";
function mapit() {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th className="Tab" scope="col">
              Mark
            </th>
            <th className="Tab" scope="col">
              Roll No.
            </th>
            <th className="Tab" scope="col">
              Name
            </th>
            <th className="Tab" scope="col">
              Attendance
            </th>
          </tr>
        </thead>
        {data.map((val) => (
          <Student
            rollno={val.rollno}
            name={val.name}
            attendance={val.attendance}
          />
        ))}
      </table>
      <button>Submit Attendance</button>
      <h1>attendance</h1>
    </>
  );
}
export default mapit;
