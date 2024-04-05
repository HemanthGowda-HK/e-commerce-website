import React from "react";
import "./recommend.css";
import Button from "../components/Button";
const Recommended = ({handleClick}) => {
  return (
    <>
      
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
        <Button onClickHandler={handleClick} value="" title="All products"></Button>
        <Button onClickHandler={handleClick} value="Nike" title="Nike"></Button>
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas"></Button>
        <Button onClickHandler={handleClick} value="Puma" title="Puma"></Button>
        <Button onClickHandler={handleClick} value="Vans" title="Vans"></Button>
        </div>
    
    </>
  );
};

export default Recommended;
