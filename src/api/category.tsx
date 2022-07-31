import instance from "./instance"

export const list = (category:any)=>{
    return instance.get("/category",category);
}
export const removeItem = (id:any)=>{
    return instance.delete(`/category/${id}`);
}

export const add = (category:any)=>{
    return instance.post("/category",category)
}
export const update = (id:string,category:any)=>{
    return instance.patch(`/category/${id}`,category)
}
export const Search = (id:string)=>{
    return instance.get(`/category/${id}`)
}