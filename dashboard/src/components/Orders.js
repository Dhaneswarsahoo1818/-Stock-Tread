import React from "react";
import { useState, useEffect } from "react";
//    import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {

   const [storeOrders, setStoreOrders] = useState([]);

useEffect(() => {
  axios
    .get("http://localhost:3050/storeOrders")
    .then((res) => {
      console.log(res.data);
      setStoreOrders(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}, []);
  return (
    <>
    <h3 className="title">Orders ({storeOrders.length})</h3>
     <div className="order-table">
        <table>
          <tr>
            <th>Name</th>                           
            <th>Price</th>
            <th>Percent</th>
            <th>Mode.</th>
          </tr>
          {storeOrders.map((order, index) => {
            const isBuy = order.mode === "BUY";
            const mode = isBuy ? "buy" : "sell";

            return (
              <tr key={index} className={mode}>
                <td>{order.name}</td>
                <td>{order.price}</td>
                <td>{order.percent}</td>
                <td>{order.mode}</td>
              </tr>
            );
          })}
        </table>
        </div>
        </>
  );
};


export default Orders;
