import React, { useState } from "react";
import "./App.css";

import sorceFile from "./json/data.json";
import dataItem from "./json/dataItem.json";

function App() {
  let [sortingVlaue, setSortingValue] = useState([[]]);

  const render123 = (e) => {
    let arr = dataItem.dataItem.filter((value) => {
      if (e.toLowerCase() === value.categories.toLowerCase()) {
        return value;
      }
    });

    console.log({...arr});
    setSortingValue((value) => {
      return [...value, arr];
    });
    console.log(sortingVlaue);
    let button = document.querySelector("button");
    button.style.display = "block";
  };

  const hoisting = () => {
    console.log("welcome");
  }

  return (
    <div className="App">
      {/* navbar */}
      <ul>
        {sorceFile.Foods.map((value, index) => {
          return (
            <li
              key={index}
              onClick={() => {
                render123(value.name);
              }}
            >
              <img src={value.image} alt="" width="70px" />
              <p>{value.name}</p>
              <button style={{ display: "none" }} >X</button>
            </li>
          )
        })}
      </ul>

      {/* sorting items */}

      {sortingVlaue.map((value, index) => {
        return value.map((value, index) => {
          return <p key={index}>{value.text}</p>;
        });
      })}

      <hr />
      <hr />

      {/* all value render */}
      {dataItem.dataItem.map((value, index) => {
        return <p key={index}>{value.text}</p>;
      })}
    </div>
  );
}

export default App;
