import React from "react";
import Items from "../items/Items";
import data_product from "../Assets/data";

function Popular() {
  return (
    <div className="container">
      <h1 className="font-bold text-3xl text-center mt-20">POPULAR IN WOMEN</h1>
      <div className="Popular-product row justify-content-center align-items-center cards-content">
        {data_product.map((item, i) => {
          return (
            <div key={i} className="col-md-3 mb-8">
              <Items
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
