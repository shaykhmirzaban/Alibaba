import React, { useState } from "react";

import items from "../json/dataItem.json";

function boilerplate(props) {
  let [navbar, setNavbar] = useState(items.Foods);
  let [item, setItem] = useState([]);

  const sortItem = (e, dex) => {
    props.sortItem(e);
    console.log(e);
    console.log(dex);
    navbar.forEach((value) => {
      console.log(value.name);
    })
  };

  const deleteItem = (e) => {
    props.deleteItem(e);
    console.log(e);
  };

  return (
    <React.StrictMode>
      {/* navbar */}
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
              style={{ border: flag ? "" : "2px solid red" }}
            >
              <img src={value.image} alt="" width="70px" />
              <p>{value.name}</p>
            </li>
          );
        })}
      </ul>
    </React.StrictMode>
  );
}
export default boilerplate;

// setSortValue((value) => {
//   return value.filter((val) => {
//     if (val.categories.toLowerCase() !== e.toLowerCase()) {
//       return val;
//     }
//   });

// allItem.forEach((value, index) => {
//   if (value.categories.toLowerCase() === e.toLowerCase()) {
//     setSortValue((val) => [...val, value]);
//   }
// });
