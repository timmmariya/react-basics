import React from "react";

import "./App.css";


const MyInput = ({ value, onChange }) => (
  <input className="styled-input" value={value} onChange={onChange} />
)

class Container extends React.Component {
  state = {
    inputValue: " "
  };

  handleChange = event => {
    const {value} = event.target;

    this.setState({ inputValue: newValue });
  };

  render() {
    return (
        <div>
          <MyInput
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </div>
    );
  }
}

const App = () => {
  return (
    <Container/>
  )
}

export default App;