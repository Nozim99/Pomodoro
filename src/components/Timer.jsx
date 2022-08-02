import React, { useEffect, useState, useRef } from "react";
import "../styles/loader1.css";
import alarm from '../sounds/alarm.wav'

// -------------
const Timer = ({ pomodoro, breakTime, time, changeTime, pomodoroMain, autoStart }) => {
  const [minute, setMinute] = useState(pomodoro);
  const [second, setSecond] = useState(0);
  const [start, setStart] = useState(false);
  const [BTminute, setBTminute] = useState(breakTime);
  const [BTstart, setBTstart] = useState(false);

  const audio = new Audio(alarm)

  const interval = React.useRef();
  const startTimer = () => {
    setStart(true);
    interval.current = setInterval(() => {
      setSecond((prev) => prev - 1);
    }, 1000);
  };

  const stopTimer = () => {
    setStart(false);
    clearInterval(interval.current);
  };

  useEffect(() => {
    setMinute(pomodoro);
  }, [pomodoro]);

  useEffect(() => {
    if (second < 0) {
      setSecond(59);
      setMinute((prev) => prev - 1);
      setBTminute((prev) => prev - 1);
    }
  }, [second]);

  useEffect(() => {
    if (minute < 0) {
      clearInterval(interval.current);
      setStart(false);
      changeTime(false);
      audio.play()
      setMinute(pomodoro)
      setSecond(0)
    }
  }, [minute]);
  // ============

  const intervalBT = React.useRef();
  const startTimerBT = () => {
    // setStart(true);
    intervalBT.current = setInterval(() => {
      setSecond((prev) => prev - 1);
    }, 1000);
  };


  useEffect(() => {
    if (BTstart) {
      startTimerBT();
    } else {
      clearInterval(intervalBT.current);
    }
  }, [BTstart]);

  useEffect(() => {
    if (BTminute < 0) {
      setBTstart(false);
      changeTime(true);
      audio.play()
      setBTstart(pomodoro)
      setSecond(0)      
    }
  }, [BTminute]);

  useEffect(() => {
    setBTminute(breakTime);
  }, [breakTime]);

  useEffect(() => {
    setSecond(0);
    if (time) {
      setMinute(pomodoro);
    } else {
      setBTminute(breakTime);
      // if(autoStart){
      //   setMinute(pomodoro)
      //   startTimer()
      // }
    }
  }, [time]);

  useEffect(()=>{
    changeTime(pomodoroMain)
  }, [pomodoroMain])

  // RETURN
  return (
    <div className="Timer">
      <div className="Timer-box">
        <h1 className="timer-numbers">
          <span className="Timer-numbers__span">
            {time
              ? minute < 10
                ? `0${minute}`
                : minute
              : BTminute < 10
              ? `0${BTminute}`
              : BTminute}
          </span>
          :
          <span className="Timer-numbers__span">
            {second < 10 ? `0${second}` : second}
          </span>
        </h1>
      </div>
      {time ? (
        // Pomodoro btn
        <div>
          {!start ? (
            <button onClick={startTimer} className="btn btn-primary mt-4">
              Start
            </button>
          ) : (
            <button onClick={stopTimer} className="btn btn-danger mt-4">
              Stop
            </button>
          )}
        </div>
      ) : (
        // Break Time btn
        <div>
          {!BTstart ? (
            <button
              onClick={() => setBTstart(true)}
              className="btn btn-primary mt-4"
            >
              Start
            </button>
          ) : (
            <button
              onClick={() => setBTstart(false)}
              className="btn btn-danger mt-4"
            >
              Stop
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Timer;
