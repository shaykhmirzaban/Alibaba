import React, { useState } from "react";

// css
import "../../style/ProductCard.scss";

function ProductCard() {
  let [item, setItem] = useState([
    {
      icon: "./images/productCard/icons/icon1.png",
      heading: "New arrivals",
      img1: "./images/productCard/img1.webp",
      price1: "2,281.10",
      msg1: "Trending Now",
      img2: "./images/productCard/img2.webp",
      price2: "5,018.41",
      msg2: "Trending Now",
    },
    {
      icon: "./images/productCard/icons/icon2.png",
      heading: "Top-ranking",
      img1: "./images/productCard/img3.webp",
      price1: "6,843.28",
      msg1: "1 piece",
      img2: "./images/productCard/img4.webp",
      price2: "1,573.96",
      msg2: "2 pieces",
    },
    {
      icon: "./images/productCard/icons/icon3.png",
      heading: "Personal Protective Equipment",
      img1: "./images/productCard/img5.webp",
      price1: "6,843.28",
      img2: "./images/productCard/img6.webp",
      price2: "1,573.96",
    },
    {
      icon: "./images/productCard/icons/icon4.jpg",
      heading: "Dropshipping",
      img1: "./images/productCard/img7.webp",
      price1: "6,843.28",
      msg1: "2 pieces",
      img2: "./images/productCard/img8.webp",
      price2: "1,573.96",
      msg2: "1 piece",
    },
    {
      icon: "./images/productCard/icons/icon5.png",
      heading: "Regional specialties",
      img1: "./images/productCard/img9.webp",
      price1: "684.33",
      msg1: "2.0 pieces",
      img2: "./images/productCard/img10.webp",
      price2: "45.63",
      msg2: "1000 pieces",
    },
    {
      icon: "./images/productCard/icons/icon6.jpg",
      heading: "True View",
      img1: "./images/productCard/img11.webp",
      price1: "342.17",
      img2: "./images/productCard/img12.webp",
      price2: "344.45",
    },
  ]);
  return (
    <React.StrictMode>
      <section className="productCards">
        {item.map((value, index) => {
          return (
            <div className="card1" key={index}>
              <div className="heading">
                <img src={value.icon} alt={value.heading} width="20px" />
                <h4>{value.heading}</h4>
              </div>
              <div className="cardBox">
                <div className="cardbox1">
                  <img src={value.img1} alt="image not found" />
                  <p className="price">Rs {value.price1}</p>
                  <p>{value.msg1}</p>
                </div>
                <div className="cardbox2">
                  <img src={value.img2} alt="image not found" />
                  <p className="price">Rs {value.price2}</p>
                  <p>{value.msg2}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </React.StrictMode>
  );
}

export default ProductCard;
