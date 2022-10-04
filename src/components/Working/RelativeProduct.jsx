import React, { useState } from "react";

import "../../style/RelativeProduct.scss";

function RelativeProduct() {
  let [items, setItems] = useState([
    {
      title: "Consumer Electronics",
      name: "Selected Novelty Products",
      buttonText: "Source Now",
      image: "./images/l1.png",
      icon1: "./images/icon1.png",
      heading1: "Premium OEM Factories",
      description1: "Customization service available",
      pro1: "./images/ll1.webp",
      heading2: "Top sales",
      desImage: "./images/icon2.png",
      description2: "TV Receivers & Accessories",
      pro2: "./images/ll3.webp",
      heading3: "Portable Audio, Video & Accessories",
      pro3: "./images/ll2.webp",
      heading4: "Delivered Duty Paid (DDP)",
      icon2: "./images/icon3.png",
      description3: "Shipping and import duties included",
      pro4: "./images/ll4.webp",
      heading5: "TV Receivers & Accessories",
      pro5: "./images/ll5.webp",
      heading6: "Camera, Photo & Accessories",
      pro6: "./images/ll6.webp",
    },
    {
      title: "Apparel",
      name: "Shopping Guide for Trending Styles",
      buttonText: "Source Now",
      image: "./images/l2.jpg",
      icon1: "./images/icon1.png",
      heading1: "Premium OEM Factories",
      description1: "Well-made clothing with trendy designs",
      pro1: "./images/duc1.jpg",
      heading2: "Top sales",
      desImage: "./images/icon2.png",
      description2: "Baby Clothing",
      pro2: "./images/duc2.jpg",
      heading3: "Novelty & Special Use",
      pro3: "./images/duc3.jpg",
      heading4: "Delivered Duty Paid (DDP)",
      icon2: "./images/icon3.png",
      description3: "Shipping and import duties included",
      pro4: "./images/duc4.jpg",
      heading5: "Ethnic Clothing",
      pro5: "./images/duc5.jpg",
      heading6: "Sportswear",
      pro6: "./images/duc6.jpg",
    },
    {
      title: "Vehicle Parts & Accessories",
      name: "Diversified Procurement Solutions",
      buttonText: "Source Now",
      image: "./images/l3.png",
      icon1: "./images/icon1.png",
      heading1: "Premium OEM Factories",
      description1: "One-stop services for your store",
      pro1: "./images/vec1.jpg",
      heading2: "Top sales",
      desImage: "./images/icon2.png",
      description2: "Marine Parts & Accessories",
      pro2: "./images/vec2.jpg",
      heading3: "Marine Parts & Accessories",
      pro3: "./images/vec3.jpg",
      heading4: "Delivered Duty Paid (DDP)",
      icon2: "./images/icon3.png",
      description3: "Shipping and import duties included",
      pro4: "./images/vec4.jpg",
      heading5: "Motorcycle Parts & Accessories",
      pro5: "./images/vec5.jpg",
      heading6: "Bus Parts & Accessories",
      pro6: "./images/vec6.jpg",
    },
  ]);
  return (
    <React.StrictMode>
      <section className="long_cards">
        {items.map((value, index) => {
          return (
            <div className="l_label1" key={index}>
              <div className="heading">
                <h1>{value.title}</h1>
              </div>
              <div className="card">
                <div className="left__part">
                  <img src={value.image} alt="" />
                  <p>{value.name}</p>
                  <button>{value.buttonText}</button>
                </div>
                <div className="right__part">
                  <div className="box_1">
                    <div className="top_part">
                      <div className="heading">
                        <img src={value.icon1} alt="" />
                        <h4>{value.heading1}</h4>
                      </div>
                      <div className="description">
                        <p>{value.description1}</p>
                      </div>
                    </div>
                    <div className="bottom_part">
                      <img
                        src={value.pro1}
                        alt="image not found"
                        width="80px"
                      />
                    </div>
                  </div>
                  <div className="box_2">
                    <div className="top_part">
                      <div className="heading">
                        <h4>{value.heading2}</h4>
                      </div>
                      <div className="description">
                        <img
                          src={value.desImage}
                          alt="image not found"
                          width="30px"
                        />
                        <p>{value.description2}</p>
                      </div>
                    </div>
                    <div className="bottom_part">
                      <img
                        src={value.pro2}
                        alt="image not found"
                        width="80px"
                      />
                    </div>
                  </div>
                  <div className="box_3">
                    <div className="top_part">
                      <div className="heading">
                        <h4>{value.heading3}</h4>
                      </div>
                    </div>
                    <div className="bottom_part">
                      <img
                        src={value.pro3}
                        alt="image not found"
                        width="80px"
                      />
                    </div>
                  </div>
                  <div className="box_4">
                    <div className="top_part">
                      <div className="heading">
                        <h4>{value.heading4}</h4>
                      </div>
                      <div className="description">
                        <img
                          src={value.icon2}
                          alt="image not found"
                          width="30px"
                        />
                        <p>{value.description3}</p>
                      </div>
                    </div>
                    <div className="bottom_part">
                      <img src={value.pro4} alt="" width="80px" />
                    </div>
                  </div>
                  <div className="box_5">
                    <div className="top_part">
                      <div className="heading">
                        <h4>{value.heading5}</h4>
                      </div>
                    </div>
                    <div className="bottom_part">
                      <img src={value.pro5} alt="" width="80px" />
                    </div>
                  </div>
                  <div className="box_6">
                    <div className="top_part">
                      <div className="heading">
                        <h4>{value.heading6}</h4>
                      </div>
                    </div>
                    <div className="bottom_part">
                      <img src={value.pro6} alt="" width="80px" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </React.StrictMode>
  );
}

export default RelativeProduct;
