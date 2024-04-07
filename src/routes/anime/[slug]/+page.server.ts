import { env } from "$env/dynamic/private";

export async function load({ fetch, params }:any) {
    try {
        const res = await fetch(`${env.API_JIKAN_URL}/anime/${params.slug}/full`)
        const data = await res.json()
        // console.log(data.data)
        return data.data
    } catch (error) {
        console.error(error)
    }
}