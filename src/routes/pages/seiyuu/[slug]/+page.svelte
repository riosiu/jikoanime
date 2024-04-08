<script lang="ts">
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  export let data: any = [];
  console.log(data);

  //

  // Buat store writable untuk data paginasi
  const paginatedVoices = writable([]);

  // Hitung jumlah halaman
  const itemsPerPage = 10;
  let currentPage = 1;

  function displayPaginatedVoices() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, data.voices.length);
    paginatedVoices.set(data.voices.slice(startIndex, endIndex));
  }

  // Panggil fungsi displayPaginatedVoices untuk menampilkan data pada halaman pertama
  onMount(displayPaginatedVoices);

  // Fungsi untuk navigasi ke halaman selanjutnya
  function nextPage() {
    if (currentPage < totalPages) {
      currentPage++;
      displayPaginatedVoices();
    }
  }

  // Fungsi untuk navigasi ke halaman sebelumnya
  function previousPage() {
    if (currentPage > 1) {
      currentPage--;
      displayPaginatedVoices();
    }
  }

  // Hitung total halaman
  const totalPages = Math.ceil(data.voices.length / itemsPerPage);
</script>

<svelte:head>
  <title>{data.name} as People and Seiyuu - Jiko Anime</title>
</svelte:head>

<nav class="flex justify-between p-5 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
</nav>

<main class="my-10 flex-col flex gap-8">
  <section class="bg-zinc-900 p-4 mx-44 rounded-md">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3">
        <a href={data.url}>
          <span class="text-6xl font-bold">{data.name}</span>
        </a>
        <div class="flex flex-row items-center gap-4 text-slate-800">
          <!-- <span class="text-gray-200">{data.status} {data.type}</span> -->

          <!-- <div class="flex flex-row gap-2">
            {#each data.genres as genre}
              <span class="text-gray-200">{genre.name}</span>
            {/each}
          </div> -->
        </div>
      </div>

      <div class="flex gap-4">
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Favorites</label>
          <span class="hover:bg-slate-950 p-4 text-2xl rounded-lg"
            >{data.favorites}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Voices as Seiyuu</label>
          <span class="hover:bg-slate-950 p-4 text-2xl rounded-lg"
            >{data.voices.length}</span
          >
        </div>
      </div>
    </div>
    <div class="my-10 flex flex-row gap-4">
      <img class="rounded-md" src={data.images.jpg.image_url} alt="" />
      <div class="flex gap-4 flex-col">
        <!-- <div class="flex flex-col">
          <span class="text-2xl">Title</span>
          <span class="">{data.title_english}</span>
          <span class="">{data.title_japanese}</span>
        </div> -->
        <!-- <span>Synopsis: {data.background}</span>
        <div class="flex gap-4">
          {#each data.themes as themes}
            <div>
              <span class="bg-slate-800 rounded-lg p-2">{themes.name}</span>
            </div>
          {/each}
        </div> -->
        <span>Given Name:{data.given_name}</span>
        <span
          >Alternative Name :{data.alternative_name !== undefined
            ? data.alternative_name
            : ""}</span
        >
        <span>Family Name: {data.family_name}</span>
        <span>{data.about}</span>
      </div>
    </div>
  </section>

  <section class="bg-zinc-900 p-4 mx-44 rounded-md">
    <span class="my-10">Character</span>
    <div class="my-10 gap-4 grid grid-cols-1">
      {#each data.voices as voices}
        <div class="flex justify-between">
          <div class="flex flex-row gap-2">
            <img
              class="rounded-lg w-[159px] h-[112.5px]"
              src={voices.anime.images.webp.image_url}
              alt=""
            />
            <span>{voices.anime.title}</span>
          </div>
          <div class="flex flex-row-reverse gap-2">
            <img
              class="rounded-lg w-[159px] h-[112.5px]"
              src={voices.character.images.jpg.image_url}
              alt=""
            />
            <div class="flex flex-col gap-1 items-end">
              <span>{voices.character.name}</span>
              <span>{voices.role}</span>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </section>
</main>
