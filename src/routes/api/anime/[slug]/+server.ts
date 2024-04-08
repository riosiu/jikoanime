import { env } from "$env/dynamic/private";

export async function GET({ url, fetch, params }) {
    try {
        const id = url.pathname.split("/")[1]
        const res = await fetch(`${env.API_JIKAN_URL}/anime/${params.slug}/full`)
        const data = await res.json()

        return new Response(JSON.stringify(data))
    } catch (error) {
        console.error(error)
    }
}