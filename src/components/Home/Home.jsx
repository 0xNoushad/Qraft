import "./home.css";
import A from "../img/bg.mp4";
import B from "../img/logo.png";
import React from "react";

const Home = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return <div className="h">
        <div className="h-main">
        <div className="logo"> lorem</div>
        <nav className="nav-links">
          <a href="#" class="Button">lorem</a>
          <a href="#" class="Button">lorem</a>
          <a href="#" class="Button">lorem</a>
          <a href="#" class="Button"> lorem</a>
          <a href="#" class="Button"> lorem</a>
        </nav>
        <nav className="langu">
       
          <a href="#" class="Button">EN</a>
        </nav>
        <div className="heading">We don't do <br />
    free
        </div>
        <div className="view">
        <a href="#" class="Button-view">View Manifesto</a>
        </div>
        <div className="date">{date}</div>
        <div className="company">
          <img src={B} alt="CK" className="ck" />
        </div>
        <video loop muted autoPlay className="backdrop">
        <source
          src={A}
          type="video/mp4"
        />
       </video>
         
        </div>
  </div>;
};

export default Home;
