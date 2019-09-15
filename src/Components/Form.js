import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.formSubmit}>
          <input type="text" name="city" placeholder="city" required={true} />
          <input
            type="text"
            name="country"
            placeholder="state"
            required={true}
          />
          <button type="submit">GET DATA</button>
        </form>
      </div>
    );
  }
}

export default Form;
