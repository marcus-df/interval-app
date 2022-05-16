import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setExpTime,
  setIsRunning,
  setMinutes,
  setSeconds,
  setTimeOut,
} from "../State/timerSlice";
import { useTimer } from "react-timer-hook";
import { RootState, AppDispatch } from "../State/store";
function Timer() {
  const dispatch = useDispatch();
  //Get the timerstate
  const { sec, min, isRun, expTime, autoStart, timeOut } = useSelector(
    (state: RootState) => state.timerReducer
  );

  //Set all the local timer variables
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: expTime,
      autoStart: autoStart,
      onExpire: () => {
        timesOut();
      },
    });
  // console.log(sec, min, isRun, expTime, autoStart, timeOut);
  console.log(seconds, minutes);

  //Update seconds state variable
  useEffect(() => {
    dispatch(setSeconds(seconds));
  }, [seconds]);

  //Update minutes state variable
  useEffect(() => {
    dispatch(setMinutes(minutes));
  }, [minutes]);

  //Set is running in state variable
  useEffect(() => {
    if (isRun !== isRunning) {
      dispatch(setIsRunning(isRunning));
    }
  }, [isRunning, isRun]);

  //Check if there is a set time and if we are not running
  useEffect(() => {
    if (expTime !== null && !isRunning) {
      restart(expTime);
    }
  }, [expTime, isRunning]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     let testTime = new Date();
  //     testTime.setSeconds(testTime.getSeconds() + 20);
  //     dispatch(setExpTime(testTime.getTime()));
  //   }, 3000);
  // }, []);

  function timesOut(): void {
    //Set the global state to timeout true
    dispatch(setTimeOut(true));
    dispatch(setIsRunning(isRunning));
    dispatch(setExpTime(null));
    return console.log("THE TIME IS UP!");
  }

  return <></>;
}

export default Timer;
