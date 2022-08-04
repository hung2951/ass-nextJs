import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import { useOrder } from '@/hooks/order'
import { currencyPrice } from '@/utils/formatMoney'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'

type Props = {}

const OrderDetail = (props: Props) => {
  const router = useRouter()
  const {id} = router.query
  const {data,error} = useSWR(id? `/orders/getOrders/${id}`:null)
  if(!data) return <div>Loading...</div>
  if(error) return <div>Failed to loading...</div>
  console.log(data);
  
  return (
    <div>
      <div>
        <div className='text-center'>Orderer</div>
        <div className='text-black text-base mx-10 border-b border-black'>
          <p>User Name: {data.idOrder.name}</p>
          <p>Email: {data.idOrder.email}</p>
          <p>Phone: {data.idOrder.phone}</p>
          <p>Address: {data.idOrder.address}</p>
          <p>Money: {currencyPrice(data.idOrder.money)}</p>
        </div>
      </div>
      <div className="container mt-5">
                <div className='text-center my-5'>Orders Detail</div>
                <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
                    <thead>
                        <tr className="border-bottom">
                            <th> <span className="ml-2">STT</span> </th>
                            <th> <span className="ml-2">Name</span> </th>
                            <th> <span className="ml-2">Image</span> </th>
                            <th> <span className="ml-2">Price</span> </th>
                            <th> <span className="ml-2">Quantity</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.orderDetail.sort((a:any, b:any) => a.price > b.price ? 1 : -1).map((item:any,index:number)=>(
                        <tr className="border-bottom" key={item._id}>
                            <td>{index+1}</td>
                            <td>{item.name}</td>
                            <td><img src={item.img} alt="" width={120}/></td>
                            <td>{currencyPrice(item.price) }</td>
                            <td>{item.quantity}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
    </div>
  )
}
OrderDetail.Layout = LayoutAdmin
export default OrderDetail