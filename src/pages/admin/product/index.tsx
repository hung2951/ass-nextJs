import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import { useProduct } from '@/hooks/product'
import Link from 'next/link'
import React from 'react'

type Props = {}

const ProductList = (props: Props) => {
  const {data:product,error,remove,status} = useProduct()
  if(!product) return <div>Loading...</div>
  if(error) return <div>Loading to failed</div>
  return (
    <div>
       <div className="container mt-5">
        <div className='text-center'>Product Management</div>
        <Link href={`/admin/product/add`}><button className='text-blue-600 text-sm underline'>Create product</button></Link>
          <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
              <thead>
                  <tr className="border-bottom">
                      <th> <span className="ml-2 ">STT</span> </th>
                      <th> <span className="ml-2">Name</span> </th>
                      <th> <span className="ml-2">Image</span> </th>
                      <th> <span className="ml-2">Price</span> </th>
                      <th> <span className="ml-2">Status</span> </th>
                      <th colSpan={2} className=""> <span className="pl-[50px]">Action</span> </th>
                  </tr>
              </thead>
              <tbody>
                {product.map((item:any,index:number)=>(
                  <tr className="border-bottom" key={item._id}>
                      <td className="">{index+1}</td>
                      <td>{item.name}</td>
                      <td><img src={item.img} alt="" width="100px"/></td>
                      <td>{item.price}</td>
                      <td><button onClick={()=>status(item._id)}>{item.status==true?"Activated":"Disable"}</button></td>
                      <td colSpan={2}>
                        <Link href={`/admin/product/${item._id}/edit`}>
                          <button className="btn btn-success" >Edit</button>
                        </Link>
                        <button className="btn btn-danger" onClick={()=>{remove(item._id)}}>Remove</button>
                      </td>
                  </tr>
                ))}
              </tbody>
          </table>
      </div>
    </div>
  )
}
ProductList.Layout = LayoutAdmin
export default ProductList