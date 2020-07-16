import React from "react";

const Counter = props => {
  const formatCount = () => {
    const { value } = props.counter;
    return value === 0 ? "zero" : value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 badge-";
    classes += props.counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  return (
    <div className='row'>
      <div className='col-1'>
        <span className={getBadgeClasses()}>{formatCount()}</span>
      </div>
      <div className='col'>
        <button
          className='btn btn-primary my-3'
          onClick={() => props.onIncrement(props.counter)}
        >
          +
        </button>
        <button
          className='btn btn-primary m-3'
          onClick={() => props.onDecrement(props.counter)}
          disabled={props.counter.value === 0 ? "disbled" : ""}
        >
          -
        </button>
        <button
          className='btn btn-danger btn-sm m-2'
          onClick={() => props.onDelete(props.counter.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Counter;
