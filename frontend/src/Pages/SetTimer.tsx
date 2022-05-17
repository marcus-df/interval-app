import React, { useEffect, useState } from "react";
import styles from "./SetTimer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../State/store";
import {
  setDuration,
  setExpTime,
  setShouldBreak,
  setShouldInterval,
} from "../State/timerSlice";
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

  function addTime() {
    setTimer(timer + 1);
  }

  function reduceTime() {
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
      <div className={styles.wrapTime}>
        <img
          onClick={reduceTime}
          src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
          alt=""
        />{" "}
        <span className={styles.timeCount}>{timer}</span>{" "}
        <img
          onClick={addTime}
          src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
          alt=""
        />
        <p className="minutes">minutes</p>
      </div>

      <div className={styles.wrapInput}>
        <label htmlFor="">
          <input
            onChange={(e) => {
              setInterval(e.target.checked);
            }}
            type="checkbox"
          />
          intervals
        </label>
        <label htmlFor="">
          <input
            onChange={(e) => {
              setWantsBreak(e.target.checked);
            }}
            type="checkbox"
          />
          5 min break / interval{" "}
        </label>
      </div>

      <button onClick={setTime} className="btn">
        START TIMER
      </button>
    </section>
  );
}

export default SetTimer;
