import { getOne } from "@/api/auth"
import { add, removeItem } from "@/api/comment"
import useSWR from "swr"

export const useComment = () => {
    const { data, error, mutate } = useSWR('/cmt')
    const createCMT = async (content:any)=>{
        const cmt = await add(content)
        mutate([...data,cmt])
    }
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
            const newComment = data.filter((item: any) => item._id != id)
            mutate(newComment)
        }
    }
    return { data, error, createCMT, getUser, remove }
}