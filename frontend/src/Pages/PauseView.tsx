import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setExpTime } from "../State/timerSlice";
import { setPaused } from "../State/appSlice";
import { RootState } from "../State/store";

function PauseView() {
  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //State variables
  const { min, sec, shouldBreak, timeOut } = useSelector(
    (state: RootState) => state.timerReducer
  );
  const { paused } = useSelector((state: RootState) => state.appReducer);

  //Functions
  function handleTimeOut(): void {
    //Check if we are paused - if not - set state to paused
    if (timeOut && !paused) {
      dispatch(setPaused(true));
    }
    //Pause time variable
    let pauseTime = new Date();
    //Set the time to five minutes ahead
    pauseTime.setSeconds(pauseTime.getSeconds() + 5 * 60);
    //Start the 5min timer
    dispatch(setExpTime(pauseTime.getTime()));
  }

  useEffect(() => {
    if (timeOut) {
      handleTimeOut();
    }
  }, [timeOut]);

  if (shouldBreak && timeOut) {
    return (
      <div>
        <h1>PauseView</h1>
        <h2>
          {min} : {sec}
        </h2>
      </div>
    );
  }
  return null;
}

export default PauseView;
