import { create, removeItem, update } from "@/api/product"
import { toast } from "react-toastify"
import useSWR from "swr"

export const useProduct =()=>{
    const {data,error,mutate} = useSWR('/products')
    const add = async (item:any)=>{
        const product = await create(item)
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
    const status = (id:string)=>{
        data.map( async (item:any)=>{
            if (item._id==id) {
                await update(id,{status:item.status = !item.status})
                .then(()=>toast.success(`Đã đổi sang ${item.status==true?"Activated":"Disable"}`))
            }
            mutate(data.map((item:any)=>item._id === id ? item.status : item))
        })
        
    }
    
   
    return {data,error,add,remove,updateItem,status}
}