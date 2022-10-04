import React, { useState } from "react";

// css
import "../../style/Navbar.scss";

// data
import items from "../../json/practice/dataItem.json";

function Navbar(props) {
  let [navbar, setNavbar] = useState(items.Foods);

  const sortItem = (e) => {
    props.sortItem(e);
  };

  const deleteItem = (e) => {
    props.deleteItem(e);
  };

  return (
    <React.StrictMode>
      <section className="topNavbar">
        <h1>
          <img src="./images/logo.svg" alt="" width="200px" />
        </h1>
      </section>
      <section className="bottom">
        <ul>
          {navbar.map((value, index) => {
            let [flag, setFlag] = useState(true);
            return (
              <li
                key={index}
                onClick={
                  flag
                    ? () => {
                        sortItem(value.name, index);
                        setFlag(false);
                      }
                    : () => {
                        deleteItem(value.name);
                        setFlag(true);
                      }
                }
                style={{ border: flag ? "" : "2px solid #ff6600" }}
              >
                <img src={value.image} alt="image not found" width="70px" />
                <p>{value.name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </React.StrictMode>
  );
}

export default Navbar;

{
  /* <li>
            <img src="./images/products/img1.webp" alt="" />
            <p>Outdoor Furniture</p>
          </li>
          <li>
            <img src="./images/products/img2.webp" alt="" />
            <p>Home Furniture</p>
          </li>
          <li>
            <img src="./images/products/img3.webp" alt="" />
            <p>Kid's Furniture</p>
          </li>
          <li>
            <img src="./images/products/img4.webp" alt="" />
            <p>Baked Goods</p>
          </li>
          <li>
            <img src="./images/products/img5.webp" alt="" />
            <p>Fruit & Vegetable Products</p>
          </li>
          <li>
            <img src="./images/products/img6.webp" alt="" />
            <p>Paintings</p>
          </li> */
}
