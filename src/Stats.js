import React from 'react';

export default (props) => {
  const nums = props.nums;
  const sum = nums.reduce((a,b) => a + b, 0);
  const average = sum / nums.length;
  // const median = () => {

  const mode = 0;
  const std_dev = 0;

  return (
      <div>
        <div>Sum {sum}, Average {average}, Median {median}, Mode {mode}, Standard Deviation {std_dev} </div>
      </div>
  );
};
