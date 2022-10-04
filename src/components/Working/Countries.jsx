import React from "react";

// css
import "../../style/countries.scss";


function Countries() {
  return (
    <React.StrictMode>
      <section className="country">
        <div className="heading">
          <h1>Suppliers by country or region</h1>
        </div>
        <ul>
          <li>
            <img src="./images/flag1.png" alt="" width="30px" />
            <p>Pakistan</p>
          </li>
          <li>
            <img src="./images/falg2.png" alt="" />
            <p>Japan</p>
          </li>
          <li>
            <img src="./images/flag2.png" alt="" />
            <p>USA</p>
          </li>
          <li>
            <img src="./images/flag3.png" alt="" />
            <p>Thailand</p>
          </li>
          <li>
            <img src="./images/flag4.jpg" alt="" />
            <p>Italy</p>
          </li>
          <li>
            <img src="./images/flag5.png" alt="" />
            <p>Turky</p>
          </li>
          <li>
            <img src="./images/flag6.png" alt="" />
            <p>Malaysia</p>
          </li>
          <li style={{color: "rgb(19 3 47)", cursor: "pointer"}}>more</li>
        </ul>
      </section>
    </React.StrictMode>
  );
}

export default Countries;
