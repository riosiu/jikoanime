import { onMount } from "svelte";
import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";
import { API_JIKAN_URL } from "$env/static/private";
import axios from "axios";

type DataAnime = {
    top: {
        mal_id: number;
        title: string;
        image_url: string;
        type: string;
        episodes: number;
        start_date: string;
        end_date: string;
        members: number;
        score: number;
    }[];
}

export async function load({ fetch }) {
    try {
        // const response = await axios.get(`${API_JIKAN_URL}/top/anime?limit=5`);
        const response = await axios.get("https://api.jikan.moe/v4/top/anime");
        const data_anime = await response.data
        console.log(data_anime);
        // return data_anime;
        return {
            props: {
                data_anime
            }
        }
    } catch (error) {
        console.error(error);
    }
}





