import { useState, useRef } from "react";

/* eslint-disable react/prop-types */
function TimerChallange({ title, targetTime }) {
  const timer = useRef();

  const [timerExpired, setTimerExpired] = useState(false);
  const [timeStarted, setStartedTime] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    setStartedTime(true);
  }

  function handleStop() {
    clearInterval(timer.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost</p>}
      <p className="challenge-time">
        Target time: {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? "Stop" : "Start"} Challange
        </button>
      </p>
      <p className={timeStarted ? "active" : undefined}>
        {timeStarted ? "Timer is running" : "Timer inactive"}
      </p>
    </section>
  );
}

export default TimerChallange;
