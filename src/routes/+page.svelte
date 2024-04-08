<script lang="ts">
  import { PUBLIC_API_JIKAN_URL } from "$env/static/public";
  import TopAnime from "../components/TopAnime.svelte";

  export let data: any = [];

  const getManga = async () => {
    try {
      const response = await fetch(`${PUBLIC_API_JIKAN_URL}/top/manga?limit=5`);
      const data_manga = await response.json();
      // console.log("manga", data_manga);
      return data_manga.data;
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
</script>

<svelte:head>
  <title>Jiko Anime - Find Your Database here</title>
</svelte:head>

<nav class="flex justify-between p-5 text-white">
  <div class="flex flex-row gap-12">
    <a href="/" class="text-xl">Jiko Anime</a>
    <div class="flex-row flex gap-10">
      <a href="/pages/anime" class="text-xl">Anime</a>
      <a href="/pages/manga" class="text-xl">Manga</a>
      <a href="/pages/seiyuu" class="text-xl">People and Seiyuu</a>
    </div>
  </div>
  <a target="_blank" href="https://rioxiu.my.id" class="text-xl">About Me</a>
</nav>

<main class="flex flex-col my-10 gap-10">
  <section class="mx-10 bg-slate-950 p-4 rounded-xl">
    <div class="flex justify-between items-center">
      <span class="font-bold text-4xl mt-4">Top Rank Anime</span>
      <a
        href="/pages/top-anime"
        class="font-semibold text-xl hover:text-decoration hover:font-bold"
        >View more</a
      >
    </div>
    <article class="grid grid-cols-5 gap-6 my-10">
      {#each data.data as item}
        <div
          class="bg-cyan-950 rounded-lg text-white flex justify-center flex-col items-center gap-3"
        >
          <a href={`/pages/anime/${item.mal_id}`}>
            <img
              src={item.images.webp.image_url}
              alt={item.title}
              width="200"
              height="200"
              class=" object-cover rounded-t-lg mt-4"
            />
          </a>
          <div class="flex flex-col items-center gap-[1px]">
            <span>{item.rank}</span>
            <span class="text-xl text-center text-gray-200">{item.title}</span>
            <span class="text-center text-lg">{item.title_japanese}</span>
            <span class="text-md">{item.year}</span>
            <span class="text-md">Skor ⭐:{item.score}</span>
          </div>
          <!-- <span>{item.studios.name}</span> -->
        </div>
      {/each}
    </article>
  </section>

  <section class="mx-10 bg-slate-950 p-4 rounded-xl">
    <div class="flex justify-between items-center">
      <span class="font-bold text-4xl mt-4">Top Rank Manga</span>
      <a
        href={"/pages/top-manga"}
        class="font-semibold text-xl hover:text-decoration hover:font-bold"
        >View more</a
      >
    </div>
    <article class="grid grid-cols-5 gap-6 my-10">
      {#await getManga() then data_manga}
        {#each data_manga as item}
          <div
            class="bg-cyan-950 rounded-lg text-white flex justify-center flex-col items-center gap-3"
          >
            <a href={`/pages/manga/${item.mal_id}`}>
              <img
                src={item.images.webp.image_url}
                alt={item.title}
                width="200"
                height="200"
                class=" object-cover rounded-t-lg mt-4"
              />
            </a>
            <div class="flex flex-col items-center gap-[1px]">
              <span>{item.rank}</span>
              <span class="text-xl text-center text-gray-200">{item.title}</span
              >
              <span class="text-center text-lg">{item.title_japanese}</span>

              <span class="text-md">Skor ⭐:{item.score}</span>
            </div>
          </div>
        {/each}
      {/await}
    </article>
  </section>

  <section class="mx-10 bg-slate-950 p-4 rounded-xl">
    <div class="flex justify-between items-center">
      <span class="font-bold text-4xl mt-4">Top Rank People</span>
      <a
        href={"/pages/top-people"}
        class="font-semibold text-xl hover:text-decoration hover:font-bold"
        >View more</a
      >
    </div>
    <article class="grid grid-cols-5 gap-6 my-10">
      {#await getPeople() then data_people}
        {#each data_people as item}
          <div
            class="bg-cyan-950 rounded-lg text-white flex justify-center flex-col items-center gap-3"
          >
            <a href={`/pages/manga/${item.mal_id}`}>
              <img
                src={item.images.webp.image_url}
                alt={item.title}
                width="200"
                height="200"
                class=" object-cover rounded-t-lg mt-4"
              />
            </a>
            <div class="flex flex-col items-center gap-[1px]">
              <span>{item.rank}</span>
              <span class="text-xl text-center text-gray-200">{item.title}</span
              >
              <span class="text-center text-lg">{item.title_japanese}</span>

              <span class="text-md">Skor ⭐:{item.score}</span>
            </div>
          </div>
        {/each}
      {/await}
    </article>
  </section>
</main>
