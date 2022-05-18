import AbortBtn from "../Components/AbortBtn";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../State/store";
import { useNavigate } from "react-router-dom";
import CircleDisplay from "../Components/CircleDisplay";

function TimerCircles() {
  //Hooks
  const navigate = useNavigate();
  //Global state timer variables
  const { duration, min, sec, expTime } = useSelector(
    (state: RootState) => state.timerReducer
  );
  //Local state variables
  const [progress, setProgress] = useState(0);

  //Check if we should be on setTimer - no time set/no timer running
  useEffect(() => {
    if (!expTime) {
      navigate("/");
    }
  }, [expTime]);

  //Update the progress of time
  useEffect(() => {
    setProgress(makeProgress(duration, min, sec));
  }, [sec]);

  //Functions
  function makeProgress(dur: number, mins: number, secs: number): number {
    let result;
    let durSec = dur * 60;
    let currentSec = mins * 60 + secs;
    //Calculate current progress
    result = (currentSec / durSec) * 100;
    return result;
  }
  return (
    <section className="page-container">
      <CircleDisplay progress={progress} />
      <AbortBtn />
    </section>
  );
}

export default TimerCircles;
