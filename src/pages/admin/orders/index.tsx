import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import { useOrder } from '@/hooks/order'
import { currencyPrice } from '@/utils/formatMoney'
import Link from 'next/link'
import React from 'react'

type Props = {}

const OrderManagement = (props: Props) => {
    const {data, error} = useOrder()
    if(!data) return <div>Loading...</div>
    if(error) return <div>Failed to loading</div>
    return (
        <div>
            <div className="container mt-5">
                <div className='text-center my-5'>Orders Management</div>
                <table className="table table-borderless table-responsive card-1 p-4 text-base text-center">
                    <thead>
                        <tr className="border-bottom">
                            <th> <span className="ml-2">ID</span> </th>
                            <th> <span className="ml-2">Name</span> </th>
                            <th> <span className="ml-2">Phone</span> </th>
                            <th> <span className="ml-2">Email</span> </th>
                            <th> <span className="ml-2">Address</span> </th>
                            <th> <span className="ml-2">Money</span> </th>
                            <th> <span className="ml-2">Status</span> </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.sort((a:any, b:any) => a.status > b.status ? 1 : -1).map((item:any)=>(
                        <tr className="border-bottom" key={item._id}>
                            <td><button><Link href={`/admin/orders/${item._id}`}>{item._id}</Link></button></td>
                            <td>{item.name}</td>
                            <td>{item.phone}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{currencyPrice(item.money) }</td>
                            <td colSpan={2}>
                                <Link href={`/admin/orders/status/${item._id}`}>
                                    <button className={item.status==3 ? "text-red-700":""}>
                                        {item.status==0?"Chưa xác nhận":""}
                                        {item.status==1?"Đang giao hàng":""}
                                        {item.status==3?"Hủy đơn hàng":""}
                                    </button></Link>
                                    <button className={item.status==2 ? "text-blue-700":""}>
                                        {item.status==2?"Giao hàng thành công":""}
                                    </button>
                                
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
  )
}
OrderManagement.Layout = LayoutAdmin
export default OrderManagement