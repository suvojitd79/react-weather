import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Result from "./Components/Result";

class App extends React.Component {
  state = {};

  formSubmit = e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const state = e.target.elements.state.value;
  };

  render() {
    return (
      <div>
        <Title />
        <Form formSubmit={this.formSubmit} />
        <Result />
      </div>
    );
  }
}

export default App;
