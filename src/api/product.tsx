import instance from "./instance";

export const create = (product:any) =>{
    return instance.post("/products",product)
}
export const removeItem = (id:any)=>{
    return instance.delete(`/products/${id}`)
}

export const update = (id:string,product:any)=>{
    return instance.patch(`/products/${id}`,product)
}