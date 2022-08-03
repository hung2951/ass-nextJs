import { addOrderDetail } from "@/api/order-detail"
import { create } from "@/api/orders"
import useSWR from "swr"

export const useOrder = ()=>{
    const {data,error,mutate} = useSWR('/orders')
    const orders = async (info:any)=>{
        const item = await create(info)
        mutate([...data,item])
    }
    return {data,error,orders}
}
export const useOrderDetail = ()=>{
    const {data,error,mutate} = useSWR('/orderDetail')

    const createOrderDetail = async (product:any)=>{
        const item = await addOrderDetail(product)
        mutate([...data,item])
    }
    return {data,error,createOrderDetail}
}