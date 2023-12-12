import React, { useContext } from 'react'
import { ShopContext } from '../Context/Context'
import  dropdown_icons from "../Components/Assets/dropdown_icon.png"
import Items from '../Components/items/Items';

function ShopCategory(props) {
  const {all_product}=useContext(ShopContext);

  return (
    <div className='shop-category m-10'>
      <img src={props.banner} alt=''/>
      <div className='shop-details flex justify-between'>
        <p className='mt-6'>
          <span className='font-bold'>Showing 1-12</span>
          out of 54 Products
        </p>
        <div className='shopcategory-sort flex bg-gray-200 p-1.5 mt-4 rounded-full'>
          Sort by <img src={dropdown_icons} style={{height:"10px"}} className='mt-2 mx-1' alt=""/>
        </div>
      </div>
      <div className="Popular-product row justify-content-center align-items-center cards-content">
        {
          all_product.map((item,i)=>{
            if(props.category===item.category){
              return(
                <div key={i} className="col-md-3 mb-8">
                <Items key={i} image={item.image} name={item.name} new_price={item.new_price}/>
                </div>
              )
            }
          })
        }
      </div>
    </div>
  )
}

export default ShopCategory