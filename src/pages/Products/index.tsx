

import Category from '@/components/client/category'
import Productsclient from '@/components/client/products'
import React from 'react'

type Props = {}

const Products = (props: Props) => {
  return (
    <div className="container min-w-full m-auto">
      <div className=" mx-auto w-[1200px] ">
        <div className="flex">
          <Category />
          <div>

          </div>

          <div>
            <Productsclient />
          </div>



        </div>
      </div>
    </div>


  )
}

export default Products