import React from "react";
import "./ImageCard.css";
const ImageCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <span onClick={() => props.removeImage(props.image)} className="remove">x
    </span>
  </div>
);
export default ImageCard;