import { getOne } from "@/api/auth"
import { add, removeItem } from "@/api/comment"
import useSWR from "swr"

export const useComment = () => {
    const { data, error, mutate } = useSWR('/cmt')
    const comment = async (item: any) => {
        const Commnet = await comment(item)
        mutate([...data, Commnet])
    }
    const getUser = async (id: string) => {
        const user = await getOne(id)
        mutate(user)
    }
    const remove = async (id: string) => {
        const confirmItem = confirm('Bạn có muốn xóa không?')
        if (confirmItem) {
            await removeItem(id)
            const newCommnet = data.filter((item: any) => item._id != id)
            mutate(newCommnet)
        }
    }
    return { data, error, add, getUser, remove }
}