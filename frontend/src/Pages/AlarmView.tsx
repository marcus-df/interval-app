import React from "react";
import { RootState } from '../State/store'
import { useSelector } from "react-redux"
import { useEffect } from 'react';
import SetNewTimerBtn from "../Components/SetNewTimerBtn";
import alarmicon from "../Assets/alarmicon.svg"
function AlarmView() {
  const { timeOut, shouldInterval } = useSelector((state: RootState) => state.timerReducer);
  useEffect(() => {
    if (timeOut && !shouldInterval) {
      alert("alarm is going")

    }
  }, [timeOut, shouldInterval])

  if (timeOut && !shouldInterval) {
    return (
      < div className="loading-field page-container" >
        <img src={alarmicon} alt="" />
        <p className="timesUp">Times up!</p>
        <SetNewTimerBtn />
      </div >
    )
  } return null
}

export default AlarmView;
