import React from "react";
import { RootState } from "../State/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import SetNewTimerBtn from "../Components/SetNewTimerBtn";
import alarmicon from "../Assets/alarmicon.svg";
function AlarmView() {
  const { timeOut, shouldInterval } = useSelector((state: RootState) => state.timerReducer);
  useEffect(() => {
    if (timeOut && !shouldInterval) {
    }
  }, [timeOut, shouldInterval]);

  if (timeOut && !shouldInterval) {
    return (
      <div className="page-container alarm-field">
        <img src={alarmicon} alt="" />
        <p className="times-up pulse">Times up!</p>
        <SetNewTimerBtn />
      </div>
    );
  }
  return null;
}

export default AlarmView;
