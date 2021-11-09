import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import Estudiantes from "../components/Estudiantes";

export default class AppRouters extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/Estudiantes" element={<Estudiantes />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
