import React, { useEffect, useState } from 'react'
import '/src/style/home/index.scss'
import SideBar from '../side-bar/index'

export default () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning){
      setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(10);
        } else {
          clearInterval(intervalId);
          // 倒計時結束時的處理
        }
      }, 1000)
    }
  }, [isRunning, minutes, seconds]);

  const handleStartTime = () => {
    setIsRunning(true)
  }

  return (
    <>
      <div className="container">
        <div className="home">
          <div className="left">
            <div className="time">
              {minutes} : {seconds}
            </div>
            <div className="bg">
              <div className="circle">
                <div className="countdown" onClick={handleStartTime}/>
              </div>
            </div>
          </div>
          <div className="right">
          </div>
          <SideBar />
        </div>
      </div>
    </>
  )
}
