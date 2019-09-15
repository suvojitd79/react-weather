import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Result from "./Components/Result";
import API_KEY_ from "./keys";

const API_KEY = API_KEY_;

class App extends React.Component {
  state = {
    temp: undefined,
    pressure: undefined,
    humidity: undefined,
    temp_min: undefined,
    temp_max: undefined,
    msg: undefined
  };

  formSubmit = async e => {
    e.preventDefault();
    console.log(API_KEY);
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );

    const status = api_call.status;

    let data = await api_call.json();

    if (status === 200) {
      data = data.main;

      this.setState({
        temp: data.temp,
        pressure: data.pressure,
        humidity: data.humidity,
        temp_min: data.temp_min,
        temp_max: data.temp_max,
        msg: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        pressure: undefined,
        humidity: undefined,
        temp_min: undefined,
        temp_max: undefined,
        msg: data.message
      });
    }
  };

  render() {
    return (
      <div>
        <Title />
        <Form formSubmit={this.formSubmit} />
        <Result
          temp={this.state.temp}
          pressure={this.state.pressure}
          humidity={this.state.pressure}
          temp_min={this.state.temp_min}
          temp_max={this.state.temp_max}
          msg={this.state.msg}
        />
      </div>
    );
  }
}

export default App;
