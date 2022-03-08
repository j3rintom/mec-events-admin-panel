import React from "react";
import "./Event.css";
import cross from "../assets/cross.svg";
import check from "../assets/check.svg";
const Event = ({ orgName, img }) => {
  const handleApprove = () => {};
  const handleReject = () => {};
  return (
    <div className="card">
      <div className="containers shoe">
        <div
          className="productImage shoeImg"
          style={{ backgroundImage: img }}
        ></div>

        <div className="productName shoeName">{orgName}</div>
      </div>
      <div className="buttons">
        <button className="check" onClick={handleApprove}>
          <img src={check} alt="" />
        </button>
        <button className="cross" onClick={handleReject}>
          <img src={cross} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Event;
