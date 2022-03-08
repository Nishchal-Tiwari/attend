import React from "react";

import { useState } from "react";
let latit = 0;
let long = 0;
function Getlocation() {
  const [lat, setlat] = useState(0);
  const [long, setlong] = useState(0);
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
    latit = position.coords.latitude;
    long = position.coords.longitude;
  }
  return (
    <>
      <h1>
        The coords are {lat} , {long}
      </h1>
    </>
  );
}
export default Getlocation;
