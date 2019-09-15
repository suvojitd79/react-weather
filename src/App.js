import React from "react";
import Title from "./Components/Title";
import Form from "./Components/Form";
import Result from "./Components/Result";

class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
