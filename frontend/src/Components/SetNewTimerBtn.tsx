import React from "react";
import { useDispatch } from "react-redux";
import { setTimeOut, setExpTime, setIsRunning, setMinutes } from "../State/timerSlice";
import { useNavigate } from "react-router-dom";

function SetNewTimerBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function newTimer() {
    dispatch(setTimeOut(false));
    dispatch(setExpTime(null));
    dispatch(setIsRunning(false));
    dispatch(setMinutes(0));
    navigate("/set-timer");
  }

  return (
    <div>
      <button className="btn set-new-timer-btn" onClick={() => newTimer()}>
        SET NEW TIMER
      </button>
    </div>
  );
}

export default SetNewTimerBtn;
