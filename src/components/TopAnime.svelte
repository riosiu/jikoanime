<script lang="ts">
  import { PUBLIC_API_JIKAN_URL } from "$env/static/public";
  import { onMount } from "svelte";
  import type { PageServerLoad } from "../routes/$types";
  import { get } from "svelte/store";

  const getTopAnime = async () => {
    try {
      const response = await fetch(`${PUBLIC_API_JIKAN_URL}/top/anime`);
      const data = await response.json();
      return data.data;
    } catch (error) {
      console.log(error);
    }
  };

  onMount(async () => {});
</script>

<section>
  <span>Top Anime</span>
  <div>
    {#await getTopAnime() then data}
      <div class="flex flex-col gap-2">
        {#each data as anime}
          <div>
            <span>{anime.title}</span>
          </div>
        {/each}
      </div>
    {/await}
  </div>
</section>
