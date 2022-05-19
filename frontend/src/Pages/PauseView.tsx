import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setExpTime, setTimeOut } from "../State/timerSlice";
import { setPaused } from "../State/appSlice";
import { RootState } from "../State/store";
import ContinueBtn from "../Components/ContinueBtn";
import pauseIcon from "../Assets/pause.svg";
import music from "../Assets/too_late.mp3";

function PauseView() {
  //Hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //State variables
  const { min, sec, shouldBreak, timeOut, duration } = useSelector(
    (state: RootState) => state.timerReducer
  );
  const { paused } = useSelector((state: RootState) => state.appReducer);

  //Local sound state variable
  const [sound, setSound] = useState(new Audio(music));

  //Functions
  //Handle what happens when timeout
  function handleTimeOut(): void {
    //Check if we are paused - if not - set state to paused
    if (timeOut && !paused && shouldBreak) {
      dispatch(setPaused(true));
      sound.play();
    }
    //Pause time variable
    let pauseTime = new Date();
    //Set the time to five minutes ahead
    pauseTime.setSeconds(pauseTime.getSeconds() + 5 * 60);
    //Start the 5min timer
    dispatch(setExpTime(pauseTime.getTime()));
  }

  //Handle what happens on press continue
  function handleContinue(): void {
    //Set the expTime to null in order to stop the timer
    dispatch(setExpTime(null));
    //Short delay before setting the new expTime and clear pause state
    setTimeout(() => {
      //New time variable
      let newTime = new Date();
      //Set the time to duration
      newTime.setSeconds(newTime.getSeconds() + duration * 60);
      //Set the expTime in state
      dispatch(setExpTime(newTime.getTime()));
      //Set timeout to false - we are starting a new round
      dispatch(setTimeOut(false));
      //Set paused to false - this isn't a pause timer cycle
      dispatch(setPaused(false));
      return console.log(`Continuing with new Timer of ${duration} minutes!`);
    }, 100);
  }

  //Handle what happens on timeout if app is set to use breaks
  useEffect(() => {
    if (timeOut && shouldBreak) {
      handleTimeOut();
    }
  }, [timeOut]);

  //Handle pause over - turn off music
  useEffect(() => {
    if (!timeOut) {
      //Stop the sound
      console.log("Pausing sound");
      sound.pause();
      sound.currentTime = 0;
    }
  }, [timeOut]);

  if (shouldBreak && timeOut) {
    return (
      <div className="pause-field page-container">
        <img src={pauseIcon} alt="Pause icon" />
        <h1>Pause & Breath</h1>
        <h2>
          {min} : {sec}
        </h2>
        <ContinueBtn action={handleContinue} />
      </div>
    );
  }
  return null;
}

export default PauseView;
