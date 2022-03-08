import React from "react";
import "./App.css";
import { useState } from "react";
import data from "./data_set/teachers_dat";
import { Link } from "react-router-dom";

function Login_fn() {
  const [id, setid] = useState("");
  const [pass, setpass] = useState("");
  const [log, setlog] = useState(false);
  const [lat, setlat] = useState(0);
  const [long, setlong] = useState(0);
  const [state, setstate] = useState(false);
  var x = document.getElementById("demo");

  navigator.permissions
    .query({ name: "geolocation" })
    .then(function (permissionStatus) {
      console.log("geolocation permission state is ", permissionStatus.state);

      permissionStatus.onchange = function () {
        console.log("geolocation permission state has changed to ", this.state);
      };
    });

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, error);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  function error(error) {
    setlat(10);
    console.log("here is error" + error.code);
  }

  function showPosition(position) {
    console.log(position.coords.latitude);

    setlat(position.coords.latitude);
    setlong(position.coords.longitude);
  }
  function matchpass(match) {
    data.forEach((val) => {
      if (val.email == id) {
        if (val.password == pass) {
          setlog(true);
          setstate(true);
        }
      }
    });
  }
  return (
    <>
      <form className="form1">
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setid(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(e) => {
              setpass(e.target.value);
              console.log(e.target.value);

              matchpass();
            }}
          />
        </div>
        <div className="mb-3 form-check">
          <label className="form-check-label" for="exampleCheck1">
            {state ? (
              <p>
                your lat={lat} , long={long}
              </p>
            ) : (
              <></>
            )}
          </label>
        </div>

        {log ? (
          <Link to="/manage_attendance">
            <button type="button" className="btn btn-primary">
              Login
            </button>
          </Link>
        ) : (
          <button type="submit" className="btn btn-primary" disabled>
            Login
          </button>
        )}
      </form>
    </>
  );
}
export default Login_fn;
