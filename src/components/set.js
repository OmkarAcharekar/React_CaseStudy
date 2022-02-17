import React from 'react';
import '../App.css';

function Set(props) {
  return (
    <>
      <div id="float-label">
        <input
          type="text"
          id="search"
          value={props.inputText}
          onChange={(e) => props.handleTextChange(e.target.value)}
        />
        <label className={props.isActive ? 'Active' : ''} htmlFor="email">
          NEW SUB TOPIC
        </label>
      </div>
      <div className="dropdown">
        <form onSubmit={props.handleSubmit}>
          <label
            style={{
              fontSize: 24,
              fontFamily:
                "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
              color: 'rgb(80, 74, 74)',
            }}
          >
            UNDER :
            <select
              value={props.value}
              onChange={props.handleChange}
              className="SELECT"
            >
              <option value="Development">Development</option>  
              <option value="Stock">Stock</option>
              <option value="Product">Product</option>
              <option value="Sales">Sales</option>
              <option value="Marketing">Marketing</option>
            </select>
          </label>
        </form>
      </div>

      <button id="submit" onClick={props.sayHello}>
        SUBMIT
      </button>
    </>
  );
}

export default Set;


