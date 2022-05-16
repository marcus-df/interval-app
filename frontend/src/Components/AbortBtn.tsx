import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../State/store";
import { setSeconds, setMinutes, setIsRunning, setExpTime } from "../State/timerSlice";

function AbortBtn() {
  const isRunning: boolean = useSelector((state: RootState) => state.timerReducer.isRun);
  const minutes: number = useSelector((state: RootState) => state.timerReducer.min);
  const seconds: number = useSelector((state: RootState) => state.timerReducer.sec);
  const dispatch = useDispatch();


  function AbortTimer() {
    dispatch(setExpTime(null))
    dispatch(setIsRunning(false));
    dispatch(setMinutes(0));
    dispatch(setSeconds(0));

    console.log(isRunning, minutes, seconds);
  }

  return <button onClick={() => AbortTimer()}>Abort Timer</button>;
}

export default AbortBtn;