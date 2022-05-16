import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../State/store";
import { setSeconds, setMinuets, setIsRunning } from "../State/timerSlice";

function AbortBtn() {
  const isRunning: boolean = useSelector((state: RootState) => state.timerReducer.isRunning);
  const minutes: number = useSelector((state: RootState) => state.timerReducer.minuets);
  const seconds: number = useSelector((state: RootState) => state.timerReducer.seconds);
  const dispatch = useDispatch();

  function AbortTimer() {
    dispatch(setIsRunning(false));
    dispatch(setMinuets(0));
    dispatch(setSeconds(0));

    console.log(isRunning, minutes, seconds);
  }

  return <button onClick={() => AbortTimer()}>Abort Timer</button>;
}

export default AbortBtn;
