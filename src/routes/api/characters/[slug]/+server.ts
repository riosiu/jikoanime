import { env } from "$env/dynamic/private";

export async function GET({ fetch, params, Request }: any) {
    try {
        const res = await fetch(`${env.API_JIKAN_URL}/characters/${params.slug}`)
        const data = await res.json()
        // console.log(data.data)
        return new Response(JSON.stringify(data))
    } catch (error) {
        console.error(error)
    }
}