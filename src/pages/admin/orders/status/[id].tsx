import LayoutAdmin from '@/components/layouts/LayoutAdmin'
import { useOrder } from '@/hooks/order'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify'
import useSWR from 'swr'

type Props = {}

const OrderStatus = (props: Props) => {
    const router = useRouter()
    const {eventStatus} = useOrder()
    const {id} = router.query
    const {data, error} = useSWR(id? `/orders/${id}`:null)
    if(!data) return <div>Loading...</div>
    if(error) return <div>Failed to loading...</div>
    const onStatus = (id:any,status:any)=>{
        const confirm = window.confirm(`Bạn chắc chắn muốn đổi sang trạng thái`)
        if (confirm) {
            eventStatus(id,status)
            toast.success(`Đã đổi trạng thái thành công`)
            setTimeout(() => {
                router.push('/admin/orders')
            }, 500);
        }
    }
  return (
    <div className='flex justify-around mt-10 text-xl'>
        <button className={`${data.status==0?"btn btn-success":"disable-status-orders"}`} onClick={()=>onStatus(id, {status:0})}>Chưa xác nhận</button>
        <button className={`${data.status==1?"btn btn-success":"disable-status-orders"}`} onClick={()=>onStatus(id, {status:1})}>Đang giao hàng</button>
        <button className={`${data.status==2?"btn btn-success":"disable-status-orders"}`} onClick={()=>onStatus(id, {status:2})}> Giao hàng thành công</button>
        <button className={`${data.status==3?"btn btn-success":"disable-status-orders"}`} onClick={()=>onStatus(id, {status:3})}>Hủy đơn hàng</button>
    </div>
  )
}
OrderStatus.Layout = LayoutAdmin
export default OrderStatus