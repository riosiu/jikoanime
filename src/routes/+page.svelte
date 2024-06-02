<script lang="ts">
  import { PUBLIC_API_JIKAN_URL } from "$env/static/public";
  import axios from "axios";
  import TopAnime from "../components/TopAnime.svelte";
  import { onMount } from "svelte";

  export let data: any = [];

  const getAnime = async () => {
    try {
      const response = await axios.get(
        `${PUBLIC_API_JIKAN_URL}/top/anime?limit=5`
      );
      const data_anime = response.data;
      // console.log("data_anime", data_anime);
      return data_anime;
    } catch (error) {}
  };
  const getManga = async () => {
    try {
      // const response = await fetch(`${PUBLIC_API_JIKAN_URL}/top/manga?limit=5`);
      // const data_manga = await response.json();
      const res = await axios.get(`${PUBLIC_API_JIKAN_URL}/top/manga?limit=5`);
      const data_manga = res.data;
      // console.log("data_manga", data_manga);
      return data_manga;
    } catch (error) {
      console.log(error);
    }
  };

  const getPeople = async () => {
    try {
      const response = await fetch(
        `${PUBLIC_API_JIKAN_URL}/top/people?limit=5`
      );
      const data_people = await response.json();
      // console.log("manga", data_manga);
      return data_people.data;
    } catch (error) {
      console.log(error);
    }
  };

  onMount(getAnime);
</script>

<svelte:head>
  <title>Jiko Anime - Find Your Database here</title>
</svelte:head>

<main class="flex flex-col gap-10 my-10">
  <section class="p-4 mx-10 phone:mx-0 bg-slate-950 rounded-xl">
    <div class="flex justify-between phone:text-md">
      <span class="text-xl font-semibold phone:text-sm">Top Rank Anime</span>
      <a
        href="/pages/top-anime"
        class="text-xl font-semibold phone:text-sm hover:text-decoration hover:font-bold"
        >View more</a
      >
    </div>
    <article
      class="grid grid-cols-5 gap-6 m-auto my-10 phone:my-3 tablet:grid-cols-2 phone:grid-cols-1"
    >
      {#await getAnime() then data_anime}
        {#each data_anime.data as item}
          <div
            class="flex flex-col items-center justify-center text-white rounded-lg border-x-2 p-2 border-y-[1px] border-cyan-950"
          >
            <div class="grid items-center justify-center my-5">
              <a
                href={`/pages/manga/${item.mal_id}`}
                class="text-xl text-center text-cyan-500">{item.title}</a
              >
              <span class="text-xl text-center">{item.rank}</span>
              <span class="text-xs text-center text-gray-500"
                >{item.title_japanese}</span
              >
              <div
                class="flex flex-row items-center justify-center mt-3 space-x-4"
              >
                <span class="text-xs">{item.year}</span>
                <span class="text-xs">Skor ⭐:{item.score}</span>
              </div>
            </div>
            <div class="mb-5">
              <a href={`/pages/anime/${item.mal_id}`}>
                <img
                  src={item.images.webp.image_url}
                  alt={item.title}
                  class="object-cover h-[360px] mt-4 rounded-t-lg"
                />
              </a>
            </div>
          </div>
        {/each}
      {/await}
    </article>
  </section>

  <section class="p-4 mx-10 phone:m-0 bg-slate-950 rounded-xl">
    <div class="flex justify-between phone:text-md">
      <span class="text-xl font-semibold phone:text-sm">Top Rank Anime</span>
      <a
        href="/pages/top-manga"
        class="text-xl font-semibold phone:text-sm hover:text-decoration hover:font-bold"
        >View more</a
      >
    </div>
    <article
      class="grid grid-cols-5 gap-6 my-10 tablet:grid-cols-2 phone:grid-cols-1"
    >
      {#await getManga() then data_manga}
        {#each data_manga.data as item}
          <div
            class="flex flex-col items-center justify-center text-white rounded-lg border-x-2 border-y-[1px] border-cyan-950"
          >
            <div class="grid items-center justify-center my-5">
              <a
                href={`/pages/manga/${item.mal_id}`}
                class="text-xl text-center text-cyan-500">{item.title}</a
              >
              <span class="text-xl text-center">{item.rank}</span>
              <span class="text-xs text-center text-gray-500"
                >{item.title_japanese}</span
              >
              <div
                class="flex flex-row items-center justify-center mt-3 space-x-4"
              >
                <span class="text-xs">{item.year}</span>
                <span class="text-xs">Skor ⭐:{item.score}</span>
              </div>
            </div>
            <div class="mb-5">
              <a href={`/pages/anime/${item.mal_id}`}>
                <img
                  src={item.images.webp.image_url}
                  alt={item.title}
                  class="object-cover h-[360px] mt-4 rounded-t-lg"
                />
              </a>
            </div>
          </div>
        {/each}
      {/await}
    </article>
  </section>

  <!-- <section class="p-4 mx-10 bg-slate-950 rounded-xl">
    <div class="flex items-center justify-between">
      <span class="mt-4 text-4xl font-bold">Top Rank People</span>
      <a
        href={"/pages/top-people"}
        class="text-xl font-semibold hover:text-decoration hover:font-bold"
        >View more</a
      >
    </div>
    <article class="grid grid-cols-5 gap-6 my-10">
      {#await getPeople() then data_people}
        {#each data_people as item}
          <div
            class="flex flex-col items-center justify-center gap-3 text-white rounded-lg bg-cyan-950"
          >
            <a href={`/pages/manga/${item.mal_id}`}>
              <img
                src={item.images.webp.image_url}
                alt={item.title}
                width="200"
                height="200"
                class="object-cover mt-4 rounded-t-lg"
              />
            </a>
            <div class="flex flex-col items-center gap-[1px]">
              <span>{item.rank}</span>
              <span class="text-xl text-center text-gray-200">{item.title}</span
              >
              <span class="text-lg text-center">{item.title_japanese}</span>

              <span class="text-md">Skor ⭐:{item.score}</span>
            </div>
          </div>
        {/each}
      {/await}
    </article>
  </section> -->
</main>
