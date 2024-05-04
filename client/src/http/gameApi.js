import { $authHost, $host } from ".";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}
export const createGame = async (game) => {
    const {data} = await $authHost.post('api/game', game)
    return data
}

export const fetchGames = async (typeId, brandId, page, limit = 5, name, search) => {
    const {data} = await $host.get('api/game', {params: {typeId, brandId, page, limit, name, search}})
    return data
}
export const fetchOneGame = async (id) => {
    const {data} = await $host.get('api/game/' + id)
    return data
}