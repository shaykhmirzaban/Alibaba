import React, { useState } from "react";

import "../../style/Deals.scss";

function Deals() {
  let [product, setProduct] = useState([
    {
      heading: "Weekly deals",
      deal1: "./images/deal1.jpg",
      buttonText: "View more",
      deal2: "./images/deal2.jpg",
      price: "6,080.95",
    },
    {
      heading: "LIVE",
      deal1: "./images/deal3.jpg",
      buttonText: "View more",
      deal2: "./images/deal4.jpg",
      price: "38,717.64",
    },
    {
      heading: "Small commodities marketplace",
      deal1: "./images/deal5.jpg",
      buttonText: "View more",
      deal2: "./images/deal6.jpg",
      price: "11.39",
    },
  ]);

  return (
    <React.StrictMode>
      <section className="deals">
        {product.map((value, index) => {
          return (
            <div className="deal1" key={index}>
              <div className="heading">
                <h1>{value.heading}</h1>
              </div>
              <div className="box">
                <div className="box1">
                  <img src={value.deal1} alt="Image not found" />
                  <button>{value.buttonText}</button>
                </div>
                <div className="box2">
                  <img src={value.deal2} alt="Image not found" />
                  <p>Rs {value.price}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </React.StrictMode>
  );
}

export default Deals;
