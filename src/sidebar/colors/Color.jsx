import React from "react";
import Input from "../../components/Input";
import "./colors.css";
const Color = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="color-title ">Colour</h2>
      <label className="sidebar-label-container ">
        <input type="radio" handleChange={handleChange} value="" name="test3" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test3"
        color="red"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test3"
        color="green"
      />

      <label className="sidebar-label-container">
        <input
          type="radio"
          onChange={handleChange}
          value="white"
          name="test3"
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "2px solid black" }}
        ></span>
        White
      </label>
    </div>
  );
};

export default Color;
