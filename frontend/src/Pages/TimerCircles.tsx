import AbortBtn from "../Components/AbortBtn";
import CircleDisplay from "../Components/CircleDisplay";
import React from "react";

function TimerCircles() {
  return (
    <section className="page-container">
      <div>
        <CircleDisplay />
        <AbortBtn />
      </div>
    </section>
  );
}

export default TimerCircles;
