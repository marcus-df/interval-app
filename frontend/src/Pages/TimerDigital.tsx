import AbortBtn from "../Components/AbortBtn";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "State/store";

function TimerDigital() {
  const { sec, min, isRun, expTime, autoStart, timeOut } = useSelector(
    (state: RootState) => state.timerReducer
  );

  return (
    <section className="page-container">
      <div className="timer-digital">
        <span>{min ? min : "0"}</span> : <span>{sec ? sec : "00"}</span>
      </div>
      <AbortBtn />
    </section>
  );
}

export default TimerDigital;
