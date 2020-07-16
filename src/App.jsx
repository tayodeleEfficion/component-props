import React, { Component } from "react";
class App extends Component {
  state = {
    counter: 1,
    tags: [],
  };

  _formatCount = () => {
    const { counter } = this.state;
    return counter === 0 ? "zero" : counter;
  };

  _renderTag = () => {
    if (this.state.tags.length === 0)
      return <p>There are no tags in the database</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };
  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this._formatCount()}</span>
        <button className='btn btn-secondary btn-sm'>Increment</button>
        {this._renderTag()}
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.counter === 0 ? "warning" : "primary";
    return classes;
  }
}

export default App;
