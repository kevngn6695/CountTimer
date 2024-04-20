import React from "react";

import Home from "./pages/Home";
import CountdownTimer from "./pages/CountdownTimer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./assets/style/sass/main/app.sass";

function App() {
  return (
    <main className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home className={`home-container`} />}
          />
          <Route
            exact
            path="/timer"
            element={<CountdownTimer className={`countdown-timer-container`} />}
          />
        </Routes>
      </Router>
    </main>
  );
}

export default React.memo(App);
