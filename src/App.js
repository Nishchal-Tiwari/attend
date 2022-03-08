import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar";
import { Routes, Route } from "react-router-dom";
//import Takeattend from "./attendance";
import Homepage from "./homepager";
import Login from "./login";
import Graph from "./graph";
import Attend from "./take_atten";
import Mod_at from "./Modifypage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/manage_attendance" element={<Attend />} />
        <Route path="/graph" element={<Graph />} />
        <Route path="/login_" element={<Login />} />
        <Route path="/modify_attendance" element={<Mod_at />} />
        <Route path="*" element={<h1>404 error page not found</h1>} />
      </Routes>
    </>
  );
}

export default App;
