import React, { useState } from "react";

import "../../style/JustForYou.scss";

function JustForYou() {
  let [item, setItem] = useState([
    {
      image: "./images/shoes1.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes2.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes4.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes5.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes6.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes7.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes8.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes9.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes10.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes11.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes12.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
    {
      image: "./images/shoes3.webp",
      text: "Fashion women's casual shoes 2022 summer new women's shoes flying woven breathable...",
      price: "Rs 537.50 - Rs 569.38",
    },
  ]);

  return (
    <React.StrictMode>
      <section className="justforyou">
        <div className="heading">
          <h1>Just for you</h1>
        </div>
        <div className="cards">
          {item.map((value, index) => {
            return (
              <div className="card1" key={index}>
                <img src={value.image} alt="" />
                <div className="descripiton">
                  <p>{value.text}</p>
                  <h4>{value.price}</h4>
                  <p>1 piece (min.order)</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </React.StrictMode>
  );
}

export default JustForYou;
