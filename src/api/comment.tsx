import instance from "./instance";

export const add = (content: any) => {
    return instance.post("/cmt", content)
}
export const removeItem = (id: any) => {
    return instance.delete(`/cmt/${id}`)
}

export const getID = (id: string, comment: any) => {
    return instance.get(`/cmt/cmtByProduct/${id}`, comment)
}

