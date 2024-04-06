import { onMount } from "svelte";
import { env } from "$env/dynamic/private";
import type { PageServerLoad } from "./$types";
import { API_JIKAN_URL } from "$env/static/private";

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
        const response = await fetch(`${env.API_JIKAN_URL}/top/anime?limit=5`);
        const data = await response.json();
        // console.log(data);
        return data
    } catch (error) {
        console.error(error);
    }
}





