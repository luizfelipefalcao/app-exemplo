import "./About.css";
import React from "react";

export default (props) => (
  <div className="about home">
    <h4>Easy Tutorial </h4>
    <br />
    <div className="tutorial">
      <p>
        <i className="btn-t fa fa-plus-circle" /> <span className='dots'>.</span> Create a new list
      </p>
      <p>
        <i className="icon-t fa fa-check" /><span className='dots'> .</span> Mark an item as done
      </p>
      <p>
        <i className="icon-t fa fa-undo" /><span className='dots'> .. </span> Return to the initial check
      </p>
      <p>
        <i className="icon-t fa fa-trash-o" /><span className='dots'> . </span> Delete an item
      </p>
      <br />
      <p className="tks">Thanks for enjoying!!</p>
    </div>
  </div>
);
