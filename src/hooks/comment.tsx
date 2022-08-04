import { getOne } from "@/api/auth"
import { add, removeItem } from "@/api/comment"
import { toast } from "react-toastify"
import useSWR from "swr"

export const useComment = () => {
    const { data, error, mutate } = useSWR('/cmt')
    const comment = async (item: any) => {
        const product = await comment(item)
        mutate([...data, product])
    }
    const getUser = async (id: string) => {
        const user = await getOne(id)
        mutate(user)
    }
    const remove = async (id: any) => {
        const confirmItem = confirm('Bạn có muốn xóa không?')
        if (confirmItem) {
            await removeItem(id);
            const newCategory = data.filter((item: any) => item.id != id);
            mutate(newCategory);
        }
    };
    return { data, error, add, getUser, remove }
}