import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Result from "./Components/Result";

const API_KEY = process.env.API_KEY;

class App extends React.Component {
  state = {
    temp: undefined,
    pressure: undefined,
    humidity: undefined,
    temp_min: undefined,
    temp_max: undefined
  };

  updateState = data => {
    this.setState({
      temp: 0,
      pressure: 0,
      humidity: 0,
      temp_min: 0,
      temp_max: 0
    });
  };

  formSubmit = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
  };

  render() {
    return (
      <div>
        <Title />
        <Form formSubmit={this.formSubmit} />
        <Result data={this.state} />
      </div>
    );
  }
}

export default App;
