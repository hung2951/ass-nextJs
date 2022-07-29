import { create, removeItem, update } from "@/api/product"
import useSWR from "swr"

export const useProduct =()=>{
    const {data,error,mutate} = useSWR('/products')
    const add = (item:any)=>{
        const product = create(item)
        mutate([...data,product])
    }
    const remove = async (id:string)=>{
        const confirmItem = confirm('Bạn có muốn xóa không?')
        if (confirmItem) {
            await removeItem(id)
            const newProduct = data.filter((item:any)=>item.id !=id)
            mutate(newProduct)
        }
    }
    const updateItem = async (id:any,product:any) =>{
        await update(id,product)
        mutate(data.map((item:any)=>item._id === id ? product : item))
    }
    return {data,error,add,remove,updateItem}
}