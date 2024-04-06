import { env } from '$env/dynamic/private'

export const load = async ({ fetch }) => {
    try {
        const response = await fetch(`${env.API_JIKAN_URL}/top/anime`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}