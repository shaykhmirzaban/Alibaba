import React, { useState } from "react";

import "../../style/CustomizedProduct.scss";

function CustomizedProduct() {
  let [items, setItems] = useState([
    {
      heading: "Customizable products",
      description:
        "Provided by 60,000+ experienced manufacturers with design and production...",
      mainImage: "./images/product1.jpg",
      title1: "Source from factories",
      pro1: "./images/pro1.webp",
      pro2: "./images/pro2.webp",
      pro3: "./images/pro3.webp",
      title2: "Top-ranking suppliers",
      pro4: "./images/pro4.webp",
      pro5: "./images/pro5.webp",
      pro6: "./images/pro6.webp",
    },
    {
      heading: "Ready-to-ship products",
      description:
        "Source from 15 million products that are ready to ship, and leave the facility within 15...",
      mainImage: "./images/product2.jpg",
      title1: "Fast dispatch",
      pro1: "./images/pro7.webp",
      pro2: "./images/pro8.webp",
      pro3: "./images/pro9.webp",
      title2: "Weekly deals",
      pro4: "./images/pro10.webp",
      pro5: "./images/pro11.webp",
      pro6: "./images/pro12.webp",
    },
  ]);

  return (
    <React.StrictMode>
      <section className="products">
        {items.map((value, index) => {
          return (
            <div className="product1" key={index}>
              <div className="top__part">
                <div className="left_side">
                  <h1>{value.heading}</h1>
                  <p>{value.description}</p>
                </div>
                <div className="right_side">
                  <img src={value.mainImage} alt="Image not found" />
                </div>
              </div>
              <div className="bottom_part">
                <div className="part1">
                  <h4>{value.title1}</h4>
                  <img src={value.pro1} alt="Image not found" />
                  <img src={value.pro2} alt="Image not found" />
                  <img src={value.pro3} alt="Image not found" />
                </div>
                <div className="part2">
                  <h4>{value.title2}</h4>
                  <img src={value.pro4} alt="Image not found" />
                  <img src={value.pro5} alt="Image not found" />
                  <img src={value.pro6} alt="Image not found" />
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </React.StrictMode>
  );
}

export default CustomizedProduct;
