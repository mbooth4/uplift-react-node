import React from 'react';

const OrderTypeSelector = (props) => {

  const options = props.categories.map((category, index) => {
    return (
      <option
        key={index}
        value={category.name}>
        {category.name}
      </option>
    );
  });

  return (
    <div className="OrderTypeSelector">
      <select onChange={(e) => {
        props.onChange(e.target.value);
      }}>{options}</select>
    </div>
  );
}

export default OrderTypeSelector;