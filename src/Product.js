import React from 'react';

export default (props) => {
  const name = props.name;
  const price = props.price;
  const discount = props.discount;
  return (
      <div>
        <div><img src={'http://cdn.macrumors.com/article-new/2013/01/ipad5_2.jpg'} /> {name[0].toUpperCase() + name.slice(1)} ${price}, discount {discount}%, sale price ${price - (price * discount/100)}</div>
      </div>
  );
};
