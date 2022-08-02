import React, { useEffect, useState } from "react";

const Settings = ({btn, handleClick, changePomodoro, changeBreakTime}) => {
  const [show, setShow] = useState(false);
  const [className, setClassName] = useState("Settings pt-5");
  const hideModal = () => {
    setShow(false);
    setClassName("Settings pt-5 Settings-hide");
  };

  const showModal = () => {
    setShow(true);
    setClassName("Settings pt-5 Settings-show");
  };

  useEffect(() => {
    if (btn === 2) {
      showModal();
    } else if(btn === 1) {
      hideModal()
    }
  }, [btn]);

  return (
    <div className={className}>
      <div className="Settings-menu">
        <h1>Settings</h1>
        {/* Pomodoro */}
        <div className="mt-3 pb-5 pt-4 position-relative">
          <h4 className="d-inline-block position-absolute end-50 me-2">
            Pomodoro:{" "}
          </h4>{" "}
          <div className="position-absolute start-50 d-inline-block">
            <input onChange={(e)=>changePomodoro(e.target.value)} type="number" className="input-num" defaultValue={50} />
            <span className="input-number"> minute</span>
          </div>
        </div>
        {/* Break Time */}
        <div className="Settings-break__time pt-2 mb-4">
          <h4 className="d-inline-block position-absolute end-50 me-2">
            Break Time:{" "}
          </h4>{" "}
          <div className="position-absolute start-50 d-inline-block">
            <input onChange={(e)=>changeBreakTime(e.target.value)} type="number" className="input-num" defaultValue={10} />{" "}
            <span className="input-number">minute</span>
          </div>
        </div>
        <button className="btn btn-primary mt-5 me-4 disabled">Auto Start</button>
        <button onClick={()=>handleClick(1)} className="btn btn-primary mt-5">
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Settings;
