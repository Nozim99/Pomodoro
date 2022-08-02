import "./App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import { useEffect, useState } from "react";

function App() {
  const [settingsModal, setsettingsModal] = useState(0);
  const [pomodoro, setPomodoro] = useState(50);
  const [breakTime, setBreakTime] = useState(10);
  const [time, setTime] = useState(true);
  const [pomodoroMain, setPomodoroMain] = useState(true);
  const [autoStart, setAutoStart] = useState(true)

  const handlePomodoro = (e) => {
    setPomodoroMain(e);
  };

  const changePomodoro = (e) => {
    setPomodoro(e);
  };

  const handleClick = (e) => {
    setsettingsModal(e);
  };

  const changeBreakTime = (e) => {
    setBreakTime(e);
  };

  const changeTime = (e) => {
    setTime(e);
  };

  return (
    <div className="App">
      <Header handleClick={handleClick} />
      <Main
        pomodoroMain={pomodoroMain}
        handlePomodoro={handlePomodoro}
        changeTime={changeTime}
        changeBreakTime={changeBreakTime}
        time={time}
        breakTime={breakTime}
        handleClick={handleClick}
        changePomodoro={changePomodoro}
        pomodoro={pomodoro}
        btn={settingsModal}
        autoStart={autoStart}
      />
    </div>
  );
}

export default App;
