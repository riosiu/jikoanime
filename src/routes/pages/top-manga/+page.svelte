<!-- index.svelte -->
<script lang="ts">
  import { PUBLIC_API_JIKAN_URL } from "$env/static/public";
  import { CgSearch } from "svelte-icons-pack/cg";
  import ModalComponnent from "../../../components/ModalAnimeComponnent.svelte";
  import ModalMangaComponnent from "../../../components/ModalMangaComponnent.svelte";

  export let data: any = [];
  console.log(data);

  let showModal = false;

  function toggleModal() {
    showModal = !showModal;
  }

  let search = "";
  let resultSearch: any = [];
  const getManga = async () => {
    try {
      const response = await fetch(
        `${PUBLIC_API_JIKAN_URL}/manga?q=${search}&limit=3`
      );
      const data = await response.json();
      resultSearch = data.data;
    } catch (error) {}
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    getManga();
  };
</script>

<nav class="flex justify-between p-5 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
  <div
    class="text-white rounded-full btn bg-primary flex flex-row gap-1 items-center"
  >
    <button class="top-0 right-0 m-2 p-2" on:click={toggleModal}>
      Search Manga
    </button>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="w-8 h-8 opacity-70"
      ><path
        fill-rule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clip-rule="evenodd"
      /></svg
    >
  </div>
</nav>

<main>
  <section class="mx-10 bg-slate-950 p-4 rounded-xl">
    <div class="flex justify-between items-center">
      <span class="font-bold text-4xl mt-4">Top Rank Anime</span>
    </div>
    <article class="grid grid-cols-5 gap-6 my-10">
      {#each data.data as item}
        <div
          class="card bg-cyan-950 rounded-lg text-white flex justify-center flex-col items-center gap-3"
        >
          <a href={`/pages/manga/${item.mal_id}`}>
            <img
              src={item.images.webp.image_url}
              alt={item.title}
              width="200"
              height="200"
              class="object-cover rounded-t-lg mt-4"
            />
          </a>
          <div class=" card-body flex flex-col items-center gap-[1px] m-2">
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
</main>

<ModalMangaComponnent {showModal} {search} {resultSearch} />
