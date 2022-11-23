import React from 'react'
import Logo from '../../components/Home/Logo/logo'
import LoginOption from '../../components/Home/LoginOption/LoginOption'

function Settings() {
  return (
    <div className="home">
      <div className="leftContainer">
        <Logo />
      </div>
      <div className="centerContainer">
              <h3>This is the Settings Page</h3>
      </div>
      <div className="rightContainer">
        <LoginOption/>
      </div>
    </div>
  )
}

export default Settings