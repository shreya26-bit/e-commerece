import React from 'react'
import Items from '../items/Items';
import new_collections from '../Assets/new_collections'


function NewCollection() {
  return (
   <div className="container">
   <h1 className="font-bold text-4xl text-center mt-20">NEW COLLECTION</h1>
   <div className="Popular-product row justify-content-center align-items-center cards-content">
     {new_collections.map((item, i) => {
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
  )
}

export default NewCollection