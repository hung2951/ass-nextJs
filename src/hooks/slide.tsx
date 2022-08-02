import { create, removeItem, update } from "@/api/banner";
import { toast } from "react-toastify";
import useSWR from "swr"

const useBanner = () => {
    const { data, error, mutate } = useSWR("/banners");
    const add = async (item: any) => {
        const banner = await create(item)
        mutate([...data, banner])
    }
    const remove = async (id: string) => {
        const confirmItem = confirm('Bạn có muốn xóa không?')
        if (confirmItem) {
            await removeItem(id)
            const newbanner = data.filter((item: any) => item.id != id)
            mutate(newbanner)
        }
    }
    const updateItem = async (id: any, banner: any) => {
        await update(id, banner)
        mutate(data.map((item: any) => item._id === id ? banner : item))
    }



    return {
        data,
        error,
        remove,
        add,
        updateItem


    };

}
export default useBanner;
