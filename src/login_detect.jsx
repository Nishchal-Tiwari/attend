import React from "react";
import { useState } from "react";

function Check() {
  const [isLogin, setLoginState] = useState(false);
  isLogin ? <h3>Teacher Name</h3> : <h3>Login</h3>;
}
export default Check;
