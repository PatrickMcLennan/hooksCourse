import React, { Component } from './node_modules/react';

//////////////// CLASS
class ToggleClass extends Component {
  state = {
    isToggled: false
  };

  toggle = () => this.setState({ isToggled: !this.state.isToggled });

  render() {
    const { isToggled } = this.state;
    return (
      <div>
        <button onClick={this.toggle}>Toggle</button>
        {isToggled && <h2>hello</h2>}
      </div>
    );
  }
}

export default ToggleClass;
