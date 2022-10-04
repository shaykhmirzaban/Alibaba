import React, { useState } from "react";

// components
import Navbar from "./components/Working/Navbar";
import Cover from "./components/Working/Cover";
import ProductCard from "./components/Working/ProductCard";
import CustomizedProduct from "./components/Working/CustomizedProduct";
import RelativeProduct from "./components/Working/RelativeProduct";
import Deals from "./components/Working/Deals";
import RPQ from "./components/Working/RPQ";
import JustForYou from "./components/Working/JustForYou";
import TradeService from "./components/Working/TradeService";
import Countries from "./components/Working/Countries";
import Footer from "./components/Working/Footer";

// data
import items from "./json/practice/dataItem.json";

import SortingValue from "./components/Working/SortingValue";

function App() {
  let [allItem, setAllItem] = useState(items.dataItem);
  let [sorValue, setSortValue] = useState([]);
  let [flag, setFlag] = useState(true);

  const sortItem = (e) => {
    allItem.forEach((value, index) => {
      if (value.categories === e) {
        setSortValue((val) => [...val, value]);
      }
    });
    setFlag(false);
  };

  const deleteItem = (e) => {
    setSortValue((value) => {
      return value.filter((val) => {
        if (val.categories.toLowerCase() !== e.toLowerCase()) {
          return val;
        }
      });
    });

    if (sorValue.length === 4) {
      setFlag(true);
    }
  };

  return (
    <React.StrictMode>
      <Navbar sortItem={sortItem} deleteItem={deleteItem} />
      {flag ? null : <SortingValue sortValue={sorValue} />}

      {flag ? <Cover /> : null}
      {flag ? <ProductCard /> : null}
      {flag ? <CustomizedProduct /> : null}
      {flag ? <RelativeProduct /> : null}
      {flag ? <Deals /> : null}
      {flag ? <RPQ /> : null}
      {flag ? <JustForYou /> : null}
      {flag ? <TradeService /> : null}
      {flag ? <Countries /> : null}

      <Footer />
    </React.StrictMode>
  );
}

export default App;
