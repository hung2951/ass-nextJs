import instance from "./instance"

export const signin = (user: any) => {
    return instance.post("/signin", user)
}
export const signup = (user: any) => {
    return instance.post("/signup", user)
}
export const update = (id: string, user: any) => {
    return instance.patch(`/users/${id}`, user)
}

export const getOne = (id: string) => {
    return instance.get(`/users/${id}`)
}