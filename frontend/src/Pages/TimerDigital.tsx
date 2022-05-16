import AbortBtn from "../Components/AbortBtn";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "State/store";

function TimerDigital() {
  const { sec, min, isRun, expTime, autoStart, timeOut } = useSelector((state: RootState) => state.timerReducer);

  return (
    <div>
      <h2>
        <span>{min ? min : "0"}</span> : <span>{sec ? sec : "00"}</span>
      </h2>
      <AbortBtn />
    </div>
  );
}

export default TimerDigital;
