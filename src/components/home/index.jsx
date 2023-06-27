import React, { useEffect, useState } from 'react'
import '/src/style/home/index.scss'
import SideBar from '../side-bar/index'

export default () => {
  const [second, setSecond] = useState(0);
  const [hour, setHour] = useState(1500);
  const [intervalId, setIntervalId] = useState(null);

  const handleCountdown = () => {
    console.log('wesley function called');
    if (intervalId) {
      // 計時器已經在運行中，不需要重複啟動
      return;
    }
    handleSecond()
  };

  const handleSecond = () => {
    const clockTimer = setInterval(() => {
      // decrease time left / increase time spent
      setHour(preCount => preCount -1);
    }, 1000);
    console.log(clockTimer)
  }

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };


  return (
    <>
      <div className="container">
        <div className="home">
          <div className="left">
            <div className="time">
              {hour}
            </div>
            <div className="bg">
              <div className="circle">
                <div className="countdown" onClick={handleCountdown}/>
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
