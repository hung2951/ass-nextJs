import { getOne } from "@/api/auth"
import { add } from "@/api/comment"
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

    return { data, error, add, getUser }
}