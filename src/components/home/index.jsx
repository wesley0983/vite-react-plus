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
      intervalId = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        } else if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          //最後清除計數器
          console.log('time out clearInterval',intervalId)
          clearInterval(intervalId)
        }
      }, 1000)
    }
    return () => clearInterval(intervalId);

  }, [isRunning,minutes,seconds]);

  const handleTime = () => {
    setIsRunning(!isRunning)
  }

  const handleResertTime =() => {
    setIsRunning(false)
    setSeconds(0)
    setMinutes(25)
  }

  return (
    <>
      <div className="container">
        <div className="home">
          <div className="left">
            <div className="time">
              {minutes.toString().length > 1 ? minutes : '0' + minutes} : {seconds === 60 ? '00' : seconds.toString().length > 1 ? seconds : '0'+seconds  }
            </div>
            <div className="bg">
              <div className="circle">
                <div className="mine">
                  <div
                    className={`${
                      isRunning ? 'timeStop' : 'timeStart'
                    }`}
                    onClick={handleTime}
                  />
                  <div className="resert" onClick={handleResertTime}/>
                </div>
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
