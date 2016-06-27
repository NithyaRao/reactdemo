import Sum from './Sum';
import Product from './Product';
import Stats from './Stats';
import Weather from './Weather';
import Temp from './Temp';
import Counter from './Counter';
import Like from './Like';
import Greeting from './Greeting';
import Bucket from './Bucket';
import React from 'react';
import { render } from 'react-dom';

let tags = [];
for(let i = 0; i < 10; i++){
  let rnd1 = Math.floor(Math.random() * 100);
  let rnd2 = Math.floor(Math.random() * 100);
  let tag = <Sum x={rnd1} y={rnd2} />;
  tags.push(tag);
}


render(
  // <div>
  //   <Temp city='chicago' temp={95} />
  //   <Product name='IPad' price={1000} discount={10} />
  //   <Stats nums={[1,1,2,3,4,5,6,1,8,9]} />
  // </div>, document.getElementById('root'));
    // <div>
    //   <Counter start={15} />
    //   <Counter start={37} />
    //   <Counter start={55} />
    // </div>, document.getElementById('root'));
    //  <Like />
  //   <div>
  //     <Greeting />
  //  </div>, document.getElementById('root'));
 //  <div>
 //    <Bucket />
 // </div>, document.getElementById('root'));

 <div>
   <Weather />
</div>, document.getElementById('root'));
