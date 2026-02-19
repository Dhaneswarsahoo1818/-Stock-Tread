import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

 const buyClick = () => {
  axios
    .post("http://localhost:3050/addOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    })
    .then(res => {
      console.log("BUY SUCCESS:", res.data);
      GeneralContext.closeBuyWindow();
    })
    .catch(err => {
      console.error("BUY ERROR:", err.response?.data || err.message);
    });


    GeneralContext.closeBuyWindow();
  };

  const cancelClick = () => {
    GeneralContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={buyClick}>
             BUY
          </Link>
          <Link to="" className="btn btn-grey" onClick={cancelClick}>
            CANCEL
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
