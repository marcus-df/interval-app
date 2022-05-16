import React, { useEffect, useState } from "react";
import styles from "./SetTimer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../State/store";
import { setExpTime } from "../State/timerSlice";
import AbortBtn from "../Components/AbortBtn";
import { useNavigate } from "react-router-dom";

function SetTimer() {
  const timeMin = useSelector((state: RootState) => state.timerReducer.min);
  const expTime = useSelector((state: RootState) => state.timerReducer.expTime);
  const [timer, setTimer] = useState(timeMin);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [interval, setInterval] = useState(false);
  const [shouldBreak, setShouldBreak] = useState(false);

  useEffect(() => {
    if (expTime) {
      navigate("/timer-digital");
    }
  });

  function addTime() {
    setTimer(timer + 1);
  }

  function reduceTime() {
    setTimer(timer - 1);
  }

  function setTime(): void {
    let newTime = new Date();
    newTime.setSeconds(newTime.getSeconds() + timer * 60);
    dispatch(setExpTime(newTime.getTime()));
    // dispatch(setShouldInterval(interval))
    // dispatch(setShouldBreak(shouldBreak))
  }
  return (
    <section className={styles.wrapperSetTimer}>
      <div className={styles.wrapTime}>
        <img onClick={reduceTime} src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" />{" "}
        <span className={styles.timeCount}>{timer}</span>{" "}
        <img onClick={addTime} src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" />
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
              setShouldBreak(e.target.checked);
            }}
            type="checkbox"
          />
          5 min break / interval{" "}
        </label>
      </div>

      <button onClick={setTime} className={styles.startBtn}>
        START TIMER
      </button>
      <AbortBtn />
    </section>
  );
}

export default SetTimer;
