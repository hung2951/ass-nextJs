import instance from "./instance"

export const create = (banner: any) => {
    return instance.post("/banners", banner)
}
export const removeItem = (id: any) => {
    return instance.delete(`/banners/${id}`)
}

export const update = (id: string, banner: any) => {
    return instance.patch(`/banners/${id}`, banner)
}

export const bannerDetail = (id: string) => {
    return instance.get(`/banners/${id}`)
}

