import instance from "./instance"

export const addOrderDetail = (item:any)=>{
    return instance.post("/orderDetail",item)
}