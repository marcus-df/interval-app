import React from 'react'
import "./SetTimer.module.scss"
function SetTimer() {
  return (
    <section className='wrapperSetTimer'>
        
        <div className='wrapTime'>
      <img src="https://cdn-icons-png.flaticon.com/512/271/271220.png" alt="" /> <span className='timeCount'>10</span> <img src="https://cdn-icons-png.flaticon.com/512/271/271228.png" alt="" />
      <p className='minutes'>minutes</p>
      </div>

<div className='wrapInput'>
      <label htmlFor=""><input type="checkbox" />intervals</label>
      <label htmlFor=""><input type="checkbox" />5 min break / interval </label>
      </div>

      
      <button className='startBtn'>START TIMER</button>
    
    </section>
  )
}

export default SetTimer;