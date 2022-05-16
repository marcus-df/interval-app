import React from "react";
import { useDispatch, useSelector } from "react-redux";
import setTimeOut from "../State/timerSlice";
import { useTimer } from "react-timer-hook";
import { RootState, AppDispatch } from "../State/store";
function Timer() {
  //Get the timerstate
  const { sec, min, isRun, expTime, autoStart } = useSelector(
    (state) => state.timerReducer
  );
  console.log(sec, min, isRun, expTime, autoStart);
  //Set all the local timer variables
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: expTime,
    onExpire: () => {
      timeOut();
    },
  });

  function timeOut(): void {
    return console.log("THE TIME IS UP!");
  }

  return <></>;
}

export default Timer;
