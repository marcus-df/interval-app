import React, { useEffect, useState } from "react";
import styles from "./SetTimer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../State/store";
import { setDuration, setExpTime, setShouldBreak, setShouldInterval } from "../State/timerSlice";
import AbortBtn from "../Components/AbortBtn";

function SetTimer() {
  const timeMin = useSelector((state: RootState) => state.timerReducer.min);
  const expTime = useSelector((state: RootState) => state.timerReducer.expTime);
  const [timer, setTimer] = useState(timeMin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [interval, setInterval] = useState(false);
  const [wantsBreak, setWantsBreak] = useState(false);

  useEffect(() => {
    if (expTime) {
      navigate("/timer-digital");
    }
  });

  function increaseTime() {
    setTimer(timer + 1);
  }

  function decreaseTime() {
    if (timer > 0) {
      setTimer(timer - 1);
    }
  }

  function setTime(): void {
    //Check if timer is set to more than 0 min
    if (timer === 0) {
      return alert("Time needs to be more than zero minuets! 💩");
    }
    //Check if wants break but not interval - makes no sense yo!
    if (wantsBreak && !interval) {
      return alert("You need to have intervals in order to break! 💩");
    }
    //Create new date to set in state expTime
    let newTime = new Date();
    //Set the expTime by adding the wanted time * 60
    newTime.setSeconds(newTime.getSeconds() + timer * 60);
    //Set the expTime in state
    dispatch(setExpTime(newTime.getTime()));
    //Set the duration in state
    dispatch(setDuration(timer));
    //Set shouldInterval
    dispatch(setShouldInterval(interval));
    //set shouldBreak
    dispatch(setShouldBreak(wantsBreak));
  }
  return (
    <section className="page-container">
      <div className="set-time-field">
        <div className="time-controls">
          <img
            onClick={decreaseTime}
            className="arrow"
            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
            alt=""
          />{" "}
          <span className="large-num">{timer}</span>{" "}
          <img
            onClick={increaseTime}
            className="arrow"
            src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
            alt=""
          />
        </div>
        <p className="unit-text">minutes</p>
      </div>

      <div>
        <label>
          <input
            onChange={(e) => {
              setInterval(e.target.checked);
            }}
            type="checkbox"
          />
          <span className="settings-text">Intervals</span>
        </label>
        <label>
          <input
            onChange={(e) => {
              setWantsBreak(e.target.checked);
            }}
            type="checkbox"
          />
          <span className="settings-text">5 min break / interval</span>
        </label>
      </div>

      <button onClick={setTime} className="btn start-btn">
        START TIMER
      </button>
    </section>
  );
}

export default SetTimer;
