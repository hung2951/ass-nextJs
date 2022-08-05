import { currencyPrice } from '@/utils/formatMoney'
import { useRouter } from 'next/router'
import React from 'react'
import useSWR from 'swr'
import OrderInfo from '.'

type Props = {}

const Info = (props: Props) => {
    const router = useRouter()
    const { id } = router.query
    const { data: order, error } = useSWR(id ? `/orders/getOrders/${id}` : null)
    if (!order) return <div>Loading...</div>
    if (error) return <div>Fail to load</div>
    console.log(order);

    return (
        <div>
            <OrderInfo />
            <h3 className='text-center'>Thông tin khách hàng</h3>
            <div className='w-[1200px] mx-auto mb-10 text-center'>
                <p>Tên khách hàng: {order.idOrder.name}</p>
                <p>Số điện thoại: {order.idOrder.phone}</p>
                <p>Email: {order.idOrder.email}</p>
                <p>Địa chỉ: {order.idOrder.address}</p>
                <p>Thành tiền: {currencyPrice(order.idOrder.money)}</p>
                <p>Trạng thái đơn hàng: {order.idOrder.status == 0 ? "Chưa xác nhận" : ""}
                    {order.idOrder.status == 1 ? "Đang giao hàng" : ""}
                    {order.idOrder.status == 2 ? "Giao hàng thành công" : ""}
                    {order.idOrder.status == 3 ? "Giao hàng thất bại" : ""}
                </p>
            </div>
            <div className='w-[1200px] mx-auto mb-10'>
                <h3 className='text-center mb-7'>Thông tin đơn hàng</h3>
                <table className="table table-borderless table-responsive card-1 p-4 text-base text-center ">
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
                        {order.orderDetail.map((item: any, index: any) => (
                            <tr key={item._id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.img}</td>
                                <td>{currencyPrice(item.price)}</td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Info