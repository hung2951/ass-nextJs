import { addOrderDetail } from "@/api/order-detail"
import { create, update } from "@/api/orders"
import { toast } from "react-toastify"
import useSWR from "swr"

export const useOrder = ()=>{
    const {data,error,mutate} = useSWR('/orders')
    const orders = async (info:any)=>{
        const item = await create(info)
        mutate([...data,item])
    }
    const eventStatus = async (id:any,status:any)=>{
        await update(id,status)
        mutate(data.map((item:any)=>item._id === id ? status : item))
    }
    return {data,error,orders,eventStatus}
}
export const useOrderDetail = ()=>{
    const {data,error,mutate} = useSWR('/orderDetail')

    const createOrderDetail = async (product:any)=>{
        const item = await addOrderDetail(product)
        mutate([...data,item])
    }
    return {data,error,createOrderDetail}
}
