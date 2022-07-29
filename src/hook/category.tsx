import useSWR from "swr"
import { list,removeItem,add, update} from "../api/category"
import { PublicConfiguration } from "swr/dist/types";
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
    const updateCatrgory = async (id:any,category:any)=>{

        await update(id,category)
        mutate(data.map((item:any)=>item._id === id ? category : item))
   
        
    }
    /// even-status 
    const evenStatus = async (id:any,category:any)=>{
        await update(id,category)
        mutate(data.map((item:any)=>item._id === id ? category : item))
   
    }
    return {
        data,
        error,
        list,
        remove,
        create ,
        updateCatrgory,
        evenStatus
 
       
    };
 
}
export default useCategory;