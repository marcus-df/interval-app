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
import { setPaused } from "../State/appSlice";

function Timer() {
  //Hooks
  const dispatch = useDispatch();

  //Timer state variables
  const {
    sec,
    min,
    isRun,
    duration,
    expTime,
    autoStart,
    timeOut,
    shouldInterval,
    shouldBreak,
  } = useSelector((state: RootState) => state.timerReducer);

  //App state variables
  const { paused } = useSelector((state: RootState) => state.appReducer);

  //Set all the local timer variables
  const { seconds, minutes, isRunning, start, pause, resume, restart } =
    useTimer({
      expiryTimestamp: expTime,
      autoStart: autoStart,
      onExpire: () => {
        timesOut();
      },
    });

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

  //Check if timer should update
  useEffect(() => {
    //If the timer is running but the time is not set anymore - stop
    if (expTime === null && isRunning) {
      pause();
    }
    //If the time is set but the timer isn't running – (re)start it
    if (expTime !== null && !isRunning) {
      //Restart the timer with new time
      restart(expTime);
    }
  }, [expTime, isRunning]);

  function timesOut(): void {
    //Check if app is paused
    //If paused the game should restart with the choosen duration and no longer paused
    if (paused) {
      //Create new date
      let newTime = new Date();
      //Set the new time to the duration
      newTime.setSeconds(newTime.getSeconds() + duration * 60);
      //Set app state to no longer paused - we are moving back to the standard timer cycle
      dispatch(setPaused(false));
      //Set the new expTime
      dispatch(setExpTime(newTime));
      //Set timeout to false - we want the pause view to get removed
      dispatch(setTimeOut(false));
    }
    //Set the global state to timeout true
    dispatch(setTimeOut(true));
    dispatch(setIsRunning(isRunning));
    dispatch(setExpTime(null));
    return console.log("THE TIME IS UP!");
  }

  return <></>;
}

export default Timer;
