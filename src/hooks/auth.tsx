import { update } from "@/api/auth"
import { toast } from "react-toastify"
import useSWR from "swr"

export const useAuth = () => {
    const { data, error, mutate } = useSWR("/users")

    const status = (id: string) => {
        data.map(async (item: any) => {
            if (item._id == id) {
                await update(id, { status: item.status = !item.status })
                    .then(() => toast.success(`Đã đổi sang ${item.status == true ? "Activated" : "Disable"}`))
            }
            mutate(data.map((item: any) => item._id === id ? item.status : item))
        })
    }
    return {
        data,
        error,
        status
    }
}