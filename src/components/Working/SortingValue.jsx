import React from "react";

// css
import "../../style/JustForYou.scss";

function SortingValue(props) {
  return (
    <React.StrictMode>
      {/* sort value */}
      <section className="justforyou">
        <div className="heading">
          <h1>Searching Value</h1>
        </div>
        <div className="cards">
          {props.sortValue.map((value, index) => {
            return (
              <div className="card1" key={index}>
                <img src={value.image} alt="image not found" />
                <div className="descripiton">
                  <h3>{value.categories}</h3>
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

export default SortingValue;
