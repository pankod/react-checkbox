import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css'

import Checkbox from './Checkbox';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: false
    }
  }

  render() {
    const { checked } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <Checkbox
            className={"normal-checkbox"}
            label={"Custom style"}
            checked={checked}
            onChange={(e, checked) => this.setState({ checked: checked })}
            onFocus={() => console.log("focused")}
            onBlur={() => console.log("blured")}
          />

          <br />
          <Checkbox
            className={"disabled-checkbox"}
            label={"<b style='color:red;'>html</b> label!"}
            checked={checked}
            renderLabelAsHtml={true}
            onChange={(e, checked) => this.setState({ checked: checked })}
          />
          <br />
          <Checkbox
            className={"errored-checkbox"}
            label={"errored"}
            checked={checked}
            errorText={"Please select it!"}
            onChange={(e, checked) => this.setState({ checked: checked })}
          />
          <br />
          <Checkbox
            className={"disabled-checkbox"}
            label={"Disabled!"}
            disabled
            checked={checked}
            onChange={(e, checked) => this.setState({ checked: checked })}
          />
        </header>
      </div>
    );
  }
}

export default App;
