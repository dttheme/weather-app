import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../Header/Header";
import WeatherWrapper from "../WeatherWrapper/WeatherWrapper";
import "./App.scss";
import AppStateProvider from "../../providers/app.provider";

function App() {
  return (
    <Router>
      <AppStateProvider>
        <div className="app">
          <Header />
          <WeatherWrapper />
        </div>
      </AppStateProvider>
    </Router>
  );
}

export default App;
