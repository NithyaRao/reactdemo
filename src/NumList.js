import React from 'react';

export default (props) => {
  const numlist = props.nums;
  return (
      <ul>
        {numlist.map((e,i) => <li key={i}>{e}</li>)}
      </ul>
  );
};
