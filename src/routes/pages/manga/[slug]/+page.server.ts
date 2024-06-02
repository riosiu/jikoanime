import { env } from "$env/dynamic/private";
import axios from "axios";

export async function load({ fetch, params }) {
    try {
        const res = await axios.get(`${env.API_JIKAN_URL}/manga/${params.slug}/full`)
        const data = res.data
        return data
    } catch (error) {
        console.error(error)
    }
}
