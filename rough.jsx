import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"]
  };
  render() {
    return (
      <React.Fragment>
        <h1>this is the counter</h1>
        <span className={this.getBadge()}>{this.formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
        {this.state.tags.map(tag => (
          <ul>
            <li key={tag}>{tag}</li>
          </ul>
        ))}
      </React.Fragment>
    );
  }
  formatCount = () => {
    const { count } = this.state;
    return count === 0 ? "ZERO" : count;
  };

  getBadge() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }
}
export default Counter;
