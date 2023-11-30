import React from "react";
import '../stylesheets/Testimonio.css';

function Testimonio(props) {
  return (
    <div className="testimonio-container">
      <img
      className="testimonio-image"
      src={require(`../images/testimonio-${props.image}.png`)}
      alt={props.alt}
      />
      <div className="testimonio-text-container">
        <p className="testimonio-name"><strong>{props.name}</strong> in {props.country}</p>
        <p className="testimonio-job">{props.job} at <strong>{props.company}</strong></p>
        <p className="testimonio-text">"{props.text}"</p>
      </div>
    </div>
  );
}

export default Testimonio;