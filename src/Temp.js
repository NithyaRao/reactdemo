import React from 'react';

export default (props) => {
  const city = props.city;
  const temp = props.temp;
  return (
      <div>
        <div>City {city[0].toUpperCase() + city.slice(1)} {temp}degF, {(temp - 32) * 5/9}degC</div>
      </div>
  );
};
