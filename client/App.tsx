import * as React from "react";
import * as ReactDOM from "react-dom";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Market from "./pages/Market";


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/market" element={<Market />}/>
          <Route path="/profile" element={<Profile />}/>
        </Routes>
      </>
    );
  }
}

export default App;
