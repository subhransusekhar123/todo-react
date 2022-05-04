import React from "react";

function Form({ChangeHandler}) {
  return (
    <div className="container">
      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">
          Name
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-lg"
          onChange={ChangeHandler}
        />
      </div>
    </div>
  );
}

export default Form;
