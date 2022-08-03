
import { toast } from "react-toastify"
import useSWR from "swr"

export const useComments = () => {
    const { data, error, mutate } = useSWR('/cmt')
    const add = async (item: any) => {
        const product = await add(item)
        mutate([...data, product])
    }


    return { data, error, add }
}