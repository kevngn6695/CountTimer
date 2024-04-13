import React from "react";

import Home from "./pages/Home";

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
        </Routes>
      </Router>
    </main>
  );
}

export default React.memo(App);
