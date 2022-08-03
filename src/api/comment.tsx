import instance from "./instance";

export const add = (comment: any) => {
    return instance.post("/cmt", comment)
}
export const remove = (id: any) => {
    return instance.delete(`/cmt/${id}`)
}

export const getID = (id: string, comment: any) => {
    return instance.get(`/cmt/cmtByProduct//${id}`, comment)
}

