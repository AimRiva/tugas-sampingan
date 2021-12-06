import React from 'react';
import Item from './Item';


const ItemShop = () => {

return(
    // <div className="container px-4 px-lg-5 mt-5">
    //     <Item />
    //     <Item />
        
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3">

          <Item />
          <Item /> 
          </div>
      </div>
    </section>
  );
}

export default ItemShop;
