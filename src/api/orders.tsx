import instance from "./instance"

export const create = (item:any)=>{
    return instance.post("/orders",item)
}
export const update = (id:string,data:any)=>{
    return instance.patch(`/orders/${id}`,data)
}