<!-- index.svelte -->
<script lang="ts">
  import { PUBLIC_API_JIKAN_URL } from "$env/static/public";
  import { CgSearch } from "svelte-icons-pack/cg";
  import ModalComponnent from "../../../components/ModalAnimeComponnent.svelte";
  import ModalMangaComponnent from "../../../components/ModalMangaComponnent.svelte";

  export let data: any = [];
  // console.log(data);

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

<svelte:head>
  <title>Top Seiyuu and People Here - Jiko Anime</title>
</svelte:head>

<nav class="flex justify-between p-5 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
</nav>

<main>
  <section class="mx-10 bg-slate-950 p-4 rounded-xl">
    <div class="flex justify-between items-center">
      <span class="font-bold text-4xl mt-4">Top Rank Seiyuu and People</span>
    </div>
    <article class="grid grid-cols-5 gap-6 my-10">
      {#each data.data as item}
        <div
          class="card bg-cyan-950 rounded-lg text-white flex justify-center flex-col items-center gap-3"
        >
          <a href={`/pages/seiyuu/${item.mal_id}`}>
            <img
              src={item.images.jpg.image_url}
              alt={item.title}
              width="200"
              height="200"
              class="object-cover rounded-t-lg mt-4"
            />
          </a>
          <div class=" card-body flex flex-col items-center gap-[1px] m-2">
            <span>{item.favorites}</span>
            <span class="text-xl text-center text-gray-200">{item.name}</span>
            <span class="text-center text-lg">{item.given_name}</span>
            <span class="text-md">{item.year}</span>
          </div>
          <!-- <span>{item.studios.name}</span> -->
        </div>
      {/each}
    </article>
  </section>
</main>

<ModalMangaComponnent {showModal} {search} {resultSearch} />
