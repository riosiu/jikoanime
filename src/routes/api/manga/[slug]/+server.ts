import { env } from '$env/dynamic/private'

export const GET = async ({ fetch, params }) => {
    try {
        const res = await fetch(`${env.API_JIKAN_URL}/manga/${params.slug}/full`)
        const data = await res.json()

        return new Response(JSON.stringify(data))
    } catch (error) {
        console.error(error)
    }
}