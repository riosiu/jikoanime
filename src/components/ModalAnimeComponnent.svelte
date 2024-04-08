<!-- Modal.svelte -->
<script lang="ts">
  import { PUBLIC_API_JIKAN_URL } from "$env/static/public";
  import { onMount } from "svelte";

  export let showModal = false;
  export let search = "";
  export let resultSearch: any[] = [];

  const toggleModal = () => {
    showModal = !showModal;
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    // Lakukan permintaan pencarian
    try {
      const response = await fetch(
        `${PUBLIC_API_JIKAN_URL}/anime?q=${search}&limit=3`
      );
      const data = await response.json();
      resultSearch = data.data;
    } catch (error) {
      console.error("Error fetching anime:", error);
    }
  };
</script>

{#if showModal}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
  >
    <div class="relative w-auto max-w-3xl mx-auto my-6">
      <div
        class="relative flex flex-col w-full bg-neutral-900 border-0 rounded-lg shadow-lg outline-none focus:outline-none"
      >
        <!-- Header -->
        <div
          class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
        >
          <h3 class="text-3xl font-semibold">Find Anime</h3>
          <button
            class="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
            on:click={toggleModal}
          >
            <span
              class="text-black h-6 w-6 text-2xl block outline-none focus:outline-none"
              >×</span
            >
          </button>
        </div>
        <!-- Body -->
        <div class="flex flex-col p-2 gap-8 justify-center items-center my-8">
          <div class="">
            <div class="flex flex-row gap-2">
              <label class="input input-bordered flex items-center gap-2">
                <input
                  on:submit={handleSearch}
                  type="text"
                  class="grow"
                  placeholder="Search"
                  bind:value={search}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  class="w-4 h-4 opacity-70"
                >
                  <path
                    fill-rule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </label>
              <button on:click={handleSearch} class="btn">Cari Anime</button>
            </div>
          </div>
          <!-- Tampilkan hasil pencarian -->
          {#if resultSearch.length > 0}
            <div class="flex flex-col justify-center items-center gap-4">
              <span class="text-xl text-cyan-950">Hasil Pencarian:</span>
              <ul class="flex flex-col gap-8">
                {#each resultSearch as anime}
                  <a href={`/pages/anime/${anime.mal_id}`}>
                    <div class="flex gap-4 hover:bg-neutral-700 p-3 rounded-lg">
                      <img
                        src={anime.images.webp.image_url}
                        class="w-24 rounded-xl h-24"
                        alt=""
                      />
                      <span>{anime.title}</span>
                    </div>
                  </a>
                {/each}
              </ul>
            </div>
          {/if}
        </div>
      </div>
    </div>
  </div>
  <div class="fixed inset-0 z-40 bg-black opacity-90"></div>
{/if}
