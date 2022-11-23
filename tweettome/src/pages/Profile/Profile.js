import React from "react";
import Logo from "../../components/Home/Logo/logo";
import LoginOption from "../../components/Home/LoginOption/LoginOption";
import Feed from "../../components/Profile/Feed/Feed";

function Profile() {
  return (
    <div className="home">
      <div className="leftContainer">
        <Logo />
      </div>
      <div className="centerContainer">
        <Feed />
      </div>
      <div className="rightContainer">
        <LoginOption />
      </div>
    </div>
  );
}

export default Profile;
