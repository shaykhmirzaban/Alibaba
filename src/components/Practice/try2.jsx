import React, { useState } from "react";

import "./App.css";

import dataItem from "./json/dataItem.json";
// import data from "./json/data.json";

function App() {
  let [item, setItem] = useState([]);
  let [navItem, setNavItem] = useState(dataItem.Foods);
  let items = dataItem.dataItem;
  let navbar = dataItem.Foods;

  const findItem = (e, dex) => {
    items.forEach((value, index) => {
      if (value.categories.toLowerCase() === e.toLowerCase()) {
        setItem((val) => [...val, value]);
      }
    });
    console.log(dex);
    console.log(navbar);
  };

  const deleteItem = (e) => {
    console.log(e);
    setItem((value) => {
      return value.filter((value, index) => {
        return value.categories.toLowerCase() !== e.toLowerCase();
      });
    });
  };

  return (
    <div className="App">
      {/* navbar */}
      <ul>
        {navItem.map((value, index) => {
          let [falg, setFlag] = useState(true);
          return (
            <li
              key={index}
              onClick={
                falg
                  ? () => {
                      findItem(value.name, index);
                      setFlag(false);
                    }
                  : () => {
                      deleteItem(value.name);
                      setFlag(true);
                    }
              }
              style={{border: falg? "" : "2px solid red"}}
            >
              <img src={value.image} alt="" width="70px" />
              <p>{value.name}</p>
            </li>
          );
        })}
      </ul>
      {/* sorting Items */}

      {item.map((value, index) => {
        return <p key={index}>{value.text}</p>;
      })}

      <hr />
      <hr />

      {/* all items */}
      {items.map((value, index) => {
        return <p key={index}>{value.text}</p>;
      })}
    </div>
  );
}

export default App;
