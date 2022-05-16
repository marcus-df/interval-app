import React, { useState } from 'react'
import {  useSelector } from 'react-redux'
import { Link } from "react-router-dom"
import "./SetTimer.module.scss"
import { RootState } from "../State/store"

function SetTimer() {
  const timeMin = useSelector((state: RootState) => state.timerReducer.minuets)
  console.log(timeMin);
const [timer, setTimer] = useState(timeMin)


function addTime() {
setTimer(timer + 1)
}

function reduceTime() {
  setTimer(timer - 1)
  }


  return (
    <section className='wrapperSetTimer'>
        
        <div className='wrapTime'>
      <img onClick={reduceTime} src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" /> <span className='timeCount'>{timer}</span> <img onClick={addTime} src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" />
      <p className='minutes'>minutes</p>
      </div>

<div className='wrapInput'>
      <label htmlFor=""><input type="checkbox" />intervals</label>
      <label htmlFor=""><input type="checkbox" />5 min break / interval </label>
      </div>

      
     <Link to="/timer-digital" state={{timer}}> <button className='startBtn'>START TIMER</button></Link>
    
    </section>
  )
}

export default SetTimer;