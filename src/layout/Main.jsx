import React, { useEffect, useState } from "react";
import Settings from "../components/Settings";
import Timer from "../components/Timer";

const Main = ({
  btn,
  handleClick,
  pomodoro,
  changePomodoro,
  breakTime,
  time,
  changeBreakTime,
  changeTime,
  handlePomodoro,
  pomodoroMain,
  autoStart
}) => {
  const [classN, setClassN] = useState("container Main py-4 mt-5");

  useEffect(() => {
    if (time) {
      setClassN("container Main py-4 mt-5");
    } else {
      setClassN("container Main-BT py-4 mt-5");
    }
  }, [time]);

  return (
    <div className={classN}>
      <div className="Main-btns">
        <button onClick={()=>handlePomodoro(true)} className="btn Main-Pomodoro_btn me-4">Pomodoro</button>
        <button onClick={()=>handlePomodoro(false)} className="btn Main-BT_btn">Break Time</button>
      </div>
      <Timer
        changeTime={changeTime}
        time={time}
        breakTime={breakTime}
        pomodoro={pomodoro}
        pomodoroMain={pomodoroMain}
        autoStart={autoStart}
      />
      <Settings
        changeBreakTime={changeBreakTime}
        changePomodoro={changePomodoro}
        handleClick={handleClick}
        breakTime={breakTime}
        pomodoro={pomodoro}
        btn={btn}
      />
    </div>
  );
};

export default Main;
