import React from "react";
import TimerAnalog from "./Pages/TimerAnalog";
import TimerCircles from "./Pages/TimerCircles";
import TimerDigital from "./Pages/TimerDigital";
import TimerText from "./Pages/TimerText";
import TimerVisual from "./Pages/TimerVisual";
import Loading from "./Pages/Loading";
import AlarmView from "./Pages/AlarmView";
import PauseView from "./Pages/PauseView";

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
        <Loading />
        <AlarmView />
        <PauseView />
      </div>
    </Router>
  );
}
