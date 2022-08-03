import instance from "./instance"

export const create = (item:any)=>{
    return instance.post("/orders",item)
}