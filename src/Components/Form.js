import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.formSubmit}>
          <input type="text" name="city" placeholder="city" />
          <input type="text" name="state" placeholder="state" />
          <button type="submit">GET DATA</button>
        </form>
      </div>
    );
  }
}

export default Form;
