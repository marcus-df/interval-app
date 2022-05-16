import React from "react";
import AbortBtn from "../Components/AbortBtn";
import AnalogClock from "../Components/AnalogClock";

function TimerAnalog() {
  return (
    <div className="timer-analog">
      <article className="clock-field">
        <AnalogClock />
      </article>
      <AbortBtn />
    </div>
  );
}

export default TimerAnalog;
