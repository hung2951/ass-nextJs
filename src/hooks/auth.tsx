import useSWR from "swr"

export const useAuth = () =>{
    const {data, error, mutate} = useSWR("/users")
    return {
        data,
        error
    }
}