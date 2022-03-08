import React from "react";
import "./App.css";
function student(props) {
  return (
    <tbody>
      <input type="checkbox" className="Tab1" unchecked />
      <th className="Tab" scope="row">
        {props.rollno}
      </th>
      <td className="Tab">{props.name}</td>
      <td className="Tab">{props.attendance}</td>
    </tbody>
  );
}
export default student;
