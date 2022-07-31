import { toast } from "react-toastify";
import useSWR from "swr"
import { list,removeItem,add, update, Search} from "../api/category"
const useCategory = ()=>{
    const {data , error , mutate} = useSWR("/category");
      ///remove 
      const remove = async (id:any)=>{
        const confirmItem = confirm('Bạn có muốn xóa không?')
        if (confirmItem) {
        await removeItem(id);
            const newCategory = data.filter((item:any)=> item.id != id);
            mutate(newCategory);
        }   
    };
    // add 
    const create  = async (item:any)=>{
        const categoryAdd = await add(item);
        mutate([...data,categoryAdd])
    }
    // update
    const updateCategory = async (id:any,category:any)=>{
        await update(id,category)
        mutate(data.map((item:any)=>item._id === id ? category : item))
    }
    /// even-status 
    const evenStatus = async (id:any,status:any)=>{
        await update(id,status)
        .then(()=> toast.success(`Đã đổi sang ${status.status===true?"Activated":"Disable"}`))
        mutate(data.map((item:any)=>item._id === id ? status : item))
    }
    /// search Category 
    const SeacrchCategory = async(id:any)=>{
        const IdCategory = await Search(id)
        mutate([...data,IdCategory])
    }
    return {
        data,
        error,
        list,
        remove,
        create ,
        updateCategory,
        evenStatus,
        SeacrchCategory
    };
 
}
export default useCategory;