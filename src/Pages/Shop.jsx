import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollection from '../Components/NewCollection/NewCollection'
import ShopCategory from './ShopCategory'

function Shop() {
  return (
    <div className=''>
     <Hero/>
     <Popular/>
     <Offers/>
     <NewCollection/>
     
    </div>
  )
}

export default Shop