import React from "react";

const StaticComponent = ({ title, image, description }) => (
  <div>
    <h2>{title}</h2>
    <img src={image} alt={title} />
    <p>{description}</p>
  </div>
);

export default StaticComponent;
