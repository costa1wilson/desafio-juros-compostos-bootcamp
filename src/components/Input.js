import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div class="input-field col s4">
        <input
          placeholder="Placeholder"
          id="first_name"
          type="text"
          class="validate"
        />
        <label for="first_name">First Name</label>
      </div>
    );
  }
}
