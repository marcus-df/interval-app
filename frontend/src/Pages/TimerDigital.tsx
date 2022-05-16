import React, { useState } from "react";

function TimerDigital() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  function setTimer() {}

  return (
    <div>
      <h2>
        <span>{minutes}</span> : <span>{seconds}</span>
      </h2>
      <button onClick={() => setTimer()}>start</button>
    </div>
  );
}

export default TimerDigital;
