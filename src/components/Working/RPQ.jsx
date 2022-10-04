import React from "react";

import "../../style/pqr.scss";

function PQR() {
  return (
    <React.StrictMode>
      <section className="pqr">
        <div className="heading">
            <img src="./images/pqricon.png" alt="image not found" />
            <h1>Request for Quotation</h1>
            <p>Get customized quotes quickly</p>
        </div>
        <div className="marketPlace">
            <div className="box1">
                <h1>Global sourcing marketplace</h1>
                <div className="number">
                    <div className="num1">
                        <h3>2991000 +</h3>
                        <p>RFQs</p>
                    </div>
                    <div className="num2">
                        <h3>21h</h3>
                        <p>Average response time</p>
                    </div>
                    <div className="num3">
                        <h3>169000 +</h3>
                        <p>Active suppliers</p>
                    </div>
                    <div className="num4">
                        <h3>7678</h3>
                        <p>Industries</p>
                    </div>
                </div>
                <button>Learn more</button>
            </div>
            <div className="box2">
                <h1>One request, multiple quotes</h1>
                <div className="inputArea">
                    <div className="productName">
                        <input type="text" placeholder="Enter Product Name"/>
                    </div>
                    <div className="q">
                        <input type="number" placeholder="Quantity"/>
                        <select>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                    </div>
                </div>
                <button>Request for Quotation</button>
            </div>
        </div>
      </section>
    </React.StrictMode>
  );
}

export default PQR;
