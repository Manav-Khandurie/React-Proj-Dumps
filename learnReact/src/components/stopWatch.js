import React, { useRef, useState } from "react";

function Stopwatch() {
  const timerIdRef = useRef(null);
  const [seconds, setSeconds] = useState(0);

  const startTimer = () => {
    timerIdRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerIdRef.current);
  };

  return (
    <div>
      <p>Seconds: {seconds}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </div>
  );
}

export default Stopwatch;
