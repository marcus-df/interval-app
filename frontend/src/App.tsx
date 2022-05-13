import React from "react";
import "./App.scss";
import TimerAnalog from "./Pages/TimerAnalog";
import TimerCircles from "./Pages/TimerCircles";
import TimerDigital from "./Pages/TimerDigital";
import TimerText from "./Pages/TimerText";
import TimerVisual from "./Pages/TimerVisual";
import Loading from "./Pages/Loading";
import AlarmView from "./Pages/AlarmView";
import PauseView from "./Pages/PauseView";
import Navigation from "./Components/Navigation";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" />
        <Route path="/timer-analog" element={<TimerAnalog />} />
        <Route path="/timer-digital" element={<TimerDigital />} />
        <Route path="/timer-visual" element={<TimerVisual />} />
        <Route path="/timer-text" element={<TimerText />} />
        <Route path="/timer-circles" element={<TimerCircles />} />
      </Routes>
      <div className="app">
        <Navigation />
        <Loading />
        <AlarmView />
        <PauseView />
      </div>
    </Router>
  );
}
