import { env } from "$env/dynamic/private";

export async function load({ fetch, params }) {
    try {
        const res = await fetch(`${env.API_JIKAN_URL}/people/${params.slug}/full`)
        const data = await res.json()
        // console.log(data.data)
        return data.data
    } catch (error) {
        console.error(error)
    }
}