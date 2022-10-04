import React, { useState } from "react";
// css
import "../../style/Cover.scss";

function Cover() {
  let [count, setCount] = useState(1);

  const next = () => {
    if (count < 7) {
      let img = document.querySelector(".image");
      img.style.transition = "1s";
      img.style.transform = "translateX(-50px)";
      setTimeout(() => {
        setCount(count + 1);
        img.style.transform = "translateX(0px)";
      }, 400);
      let cir = document.querySelector(`.cir${count}`);
      cir.style.background = "#13032f";
    } else {
      setCount(1);
      for (let i = 1; i < 7; i++) {
        let cir = document.querySelector(`.cir${i}`);
        cir.style.background = "transparent";
      }
    }
  };

  const previous = () => {
    if (count > 1) {
      let img = document.querySelector(".image");
      img.style.transition = "1s";
      img.style.transform = "translateX(50px)";
      setTimeout(() => {
        setCount(count - 1);
        img.style.transform = "translateX(0px)";
      }, 400);
      let cir = document.querySelector(`.cir${count}`);
      cir.style.background = "#13032f";
    } else {
      setCount(6);
      for (let i = 1; i < 7; i++) {
        let cir = document.querySelector(`.cir${i}`);
        cir.style.background = "transparent";
      }
    }
  };

  return (
    <React.StrictMode>
      <section className="cover">
        <div className="slider">
          <button onClick={previous}>
            <i className="fa-solid fa-angles-left"></i>
          </button>
          <img
            src={`./images/cover/img${count}.webp`}
            alt=""
            className="image"
          />
          <button onClick={next}>
            <i className="fa-solid fa-angles-right"></i>
          </button>
        </div>
        <div className="circle">
          <div className="cir1"></div>
          <div className="cir2"></div>
          <div className="cir3"></div>
          <div className="cir4"></div>
          <div className="cir5"></div>
          <div className="cir6"></div>
        </div>
        <div className="boxes">
          <div className="box1">
            <p>Sign up to enjoy exciting...</p>
            <button className="focus">Join Free</button>
            <button className="notfocus">Sign in</button>
          </div>
          <div className="box2">
            <p>Buyers Club for all businesses</p>
            <button>Learn more</button>
          </div>
          <div className="box3">
            <p>US $10 off with a new supplier</p>
            <img src="./images/golden1.jpg" alt="" width="50px"/>
          </div>
          <div className="box4">
            <p>RFQ: quotes with supplier preferences</p>
          <img src="./images/golden2.jpg" alt="" width="50px"/>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
}

export default Cover;
