import React from "react";
import AbortBtn from "../Components/AbortBtn";
import AnalogClock from "../Components/AnalogClock";

function TimerAnalog() {
  return (
    <section className="page-container">
      <article className="clock-field">
        <AnalogClock />
      </article>
      <AbortBtn />
    </section>
  );
}

export default TimerAnalog;
