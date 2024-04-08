import { env } from '$env/dynamic/private'

export const load = async ({ fetch }: any) => {
    try {
        const response = await fetch(`${env.API_JIKAN_URL}/manga`)
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}