import React, { Component } from "react";

class Notification extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "#33E3FF", width: "25%", marginTop: "25%" }}>
        <p>
          {this.props.text}
        </p>
        <button onClick={this.props.onDismissClick}>
          x
        </button>
      </div>
    );
  }
}

export default Notification