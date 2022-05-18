import React from 'react'
import { useDispatch } from "react-redux"
import { setMinutes } from "../State/timerSlice"
import { useNavigate } from 'react-router-dom'

function SetNewTimerBtn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();



  function newTimer() {
    dispatch(setMinutes(0))
    navigate("/set-timer")
  }


  return (
    <div>
      <button className='setNewTimerBtn' onClick={() => newTimer()}>
        SET NEW TIMER
      </button>
    </div>
  )
}


export default SetNewTimerBtn;