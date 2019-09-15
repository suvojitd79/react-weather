import React from "react";

const Result = props => {
  return (
    <div>
      {props.temp !== undefined && <p>temp: {props.temp} </p>}
      {props.pressure !== undefined && <p>pressure: {props.pressure} </p>}
      {props.humidity !== undefined && <p>humidity: {props.humidity} </p>}
      {props.temp_min !== undefined && <p>temp_min: {props.temp_min} </p>}
      {props.temp_max !== undefined && <p>temp_max: {props.temp_max} </p>}
      {props.msg !== undefined && <p> {props.msg} </p>}
    </div>
  );
};

export default Result;
