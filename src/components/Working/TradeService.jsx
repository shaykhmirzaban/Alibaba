import React from "react";

// css
import "../../style/Trade.scss";

function TradeService() {
  return (
    <React.StrictMode>
      <section className="trade">
        <div className="heading">
          <h1>Trade services</h1>
          <p>
            Alibaba.com's trade services help ensure that your purchases are
            protected.
          </p>
        </div>
        <div className="cards">
          <div className="card1">
            <div className="image">
              <p>
                Trade Assurance is a free order protection service offered by
                Alibaba.com.
              </p>
            </div>
            <div className="label">
              <div className="text">
                <h3>Trade Assurance</h3>
                <p>ORDER PROTECTION</p>
              </div>
              <div className="icon">
                <img src="./images/trade1.png" alt="" width="30px"/>
              </div>
            </div>
          </div>

          <div className="card2">
            <div className="image">
              <p>
                Trade Assurance is a free order protection service offered by
                Alibaba.com.
              </p>
            </div>
            <div className="label">
              <div className="text">
                <h3>Trade Assurance</h3>
                <p>ORDER PROTECTION</p>
              </div>
              <div className="icon">
                <img src="./images/trade2.png" alt="" width="30px"/>
              </div>
            </div>
          </div>

          <div className="card3">
            <div className="image">
              <p>
                Trade Assurance is a free order protection service offered by
                Alibaba.com.
              </p>
            </div>
            <div className="label">
              <div className="text">
                <h3>Trade Assurance</h3>
                <p>ORDER PROTECTION</p>
              </div>
              <div className="icon">
                <img src="./images/trade3.png" alt="" width="30px"/>
              </div>
            </div>
          </div>

          <div className="card4">
            <div className="image">
              <p>
                Trade Assurance is a free order protection service offered by
                Alibaba.com.
              </p>
            </div>
            <div className="label">
              <div className="text">
                <h3>Trade Assurance</h3>
                <p>ORDER PROTECTION</p>
              </div>
              <div className="icon">
                <img src="./images/trade1.png" alt="" width="30px"/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.StrictMode>
  );
}

export default TradeService;
