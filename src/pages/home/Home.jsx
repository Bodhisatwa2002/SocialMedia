import React from "react";
import './Home.css'
import ProfileSide from "../../components/profileSide/ProfileSide";

const Home = () => {
  return (
    <div className="Home">
      <ProfileSide/>
      <div className="postSide">Post Side</div>
      <div className="RightSide">RightSide</div>
    </div>
  );
};

export default Home;
