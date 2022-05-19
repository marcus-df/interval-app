import React from "react";
import "./App.scss";
import SetTimer from "./Pages/SetTimer";
import TimerAnalog from "./Pages/TimerAnalog";
import TimerCircles from "./Pages/TimerCircles";
import TimerDigital from "./Pages/TimerDigital";
import TimerText from "./Pages/TimerText";
import TimerVisual from "./Pages/TimerVisual";
import Loading from "./Pages/Loading";
import AlarmView from "./Pages/AlarmView";
import PauseView from "./Pages/PauseView";
import Navigation from "./Components/Navigation";
import Menu from "./Components/Menu";
import Timer from "./Components/Timer";

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

export function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Menu />
        <Loading />
        <AlarmView />
        <PauseView />
        <Timer />
      </div>
      <Routes>
        <Route path="/" element={<SetTimer />} />
        <Route path="/timer-analog" element={<TimerAnalog />} />
        <Route path="/timer-digital" element={<TimerDigital />} />
        <Route path="/timer-visual" element={<TimerVisual />} />
        <Route path="/timer-text" element={<TimerText />} />
        <Route path="/timer-circles" element={<TimerCircles />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
