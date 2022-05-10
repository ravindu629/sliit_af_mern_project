import React from "react";
import "./App.css";
import image from "./images/slide1.jpg";

function Home() {
  return (
    <div>
      <img className="bgImg" src={image} />
    </div>
  );
}

export default Home;
