import React from "react";

const Result = props => {
  return (
    <div>
      {props.temp && <h4>temp: {props.temp} </h4>}
      {props.pressure && <h4>pressure: {props.pressure} </h4>}
      {props.humidity && <h4>humidity: {props.humidity} </h4>}
      {props.temp_min && <h4>temp_min: {props.temp_min} </h4>}
      {props.temp_max && <h4>temp_max: {props.temp_max} </h4>}
    </div>
  );
};

export default Result;
