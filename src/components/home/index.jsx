import React from 'react'
import '/src/style/home/index.scss'
import SideBar from '../side-bar/index'

export default () => {

  return (
    <>
      <div className="container">
        <div className="home">
          <div className="left">

          </div>
          <div className="right">
            <SideBar />
          </div>
        </div>
      </div>
    </>
  )
}
