<script lang="ts">
  import { PUBLIC_API_JIKAN_URL } from "$env/static/public";
  import { onMount } from "svelte";
  export let data: any = [];

  const anime = data.data;
  console.log("anime", data);

  //get character

  const getCharacter = async () => {
    try {
      const response = await fetch(`/api/anime/${anime.mal_id}/characters`);
      const character = await response.json();
      const fix_character = character.data.slice(0, 10);

      console.log("character", character);
      console.log(fix_character);
      return fix_character;
      // return character;
    } catch (error) {
      console.log(error);
    }
  };

  onMount(async () => {
    getCharacter;
  });
</script>

<nav class="flex justify-between p-5 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
</nav>

<svelte:head>
  <title>{anime.title} - Jiko Anime</title>
  <meta name="description" content={anime.background} />
</svelte:head>

<main class="flex flex-col gap-4 my-10">
  <section class="p-4 rounded-md bg-zinc-900 mx-44">
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-3">
        <a href={anime.url} target="_blank" class="text-4xl font-bold"
          >{anime.title}</a
        >
        <div class="flex flex-row items-center gap-4 text-slate-200">
          <span>{anime.status} {anime.type}</span>
          <span>{anime.year}</span>
          <div class="flex flex-row gap-2">
            {#each anime.genres as genre}
              <span>{genre.name}</span>
            {/each}
          </div>
        </div>
      </div>
      <div class="flex gap-4 mr-4">
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Popularity</label>
          <span class="p-4 text-2xl rounded-lg hover:bg-slate-950"
            >{anime.popularity}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Rank</label>
          <span class="p-4 text-2xl rounded-lg hover:bg-slate-950"
            >{anime.rank}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Score</label>
          <span class="p-4 text-2xl rounded-lg hover:bg-slate-950"
            >⭐ {anime.score}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label for="" class="text-slate-700">Total Episodes</label>
          <span class="p-4 text-2xl rounded-lg hover:bg-slate-950"
            >{anime.episodes}</span
          >
        </div>
      </div>
    </div>
    <article class="flex flex-row gap-4 p-3">
      <img
        src={anime.images.webp.large_image_url !== null || undefined
          ? anime.images.webp.large_image_url
          : `/not-found.jpg`}
        alt={anime.title}
        class="object-cover mt-4 rounded-t-lg"
      />
      <iframe
        class="rounded-t-xl"
        width="1120"
        title={anime.title}
        src={anime.trailer.embed_url}
      ></iframe>
    </article>
    <article class="flex flex-row gap-4 mt-10">
      <div class="w-1/2">
        <span
          >Title : {anime.title}
          {anime.title_japanese}
          {anime.title_english}</span
        >
        <hr class="my-2 bg-black" />
        <span>Source: {anime.source}</span>
        <hr class="my-2 bg-black" />
        {#each anime.studios as studios}
          <span
            >Studios : <span class="text-cyan-900">{studios.name}</span></span
          >
        {/each}
        <br />
        <br />
        <span class="text-lg font-bold">Synopsis</span>
        <hr class="my-2 bg-black" />
        <span class="">{anime.synopsis}</span>
        <br />
        <br />
        <span class="text-lg font-bold">Background</span>
        <hr class="my-2 bg-black" />
        <span>{anime.background}</span>

        <br />
        <br />
        <span class="text-lg font-bold">Relations</span>
        <hr class="my-2 bg-black" />
        <div class="flex flex-col gap-3 my-4">
          <!-- {#each anime.relations as relations}
            <div class="flex flex-row gap-2">
              <span>{relations.relation}:</span>
              {#each relations.entry as entry}
                <div>
                  <a
                    target="_blank"
                    class="hover:text-blue-900"
                    href={`/pages/anime/${entry.mal_id}`}>{entry.name}</a
                  >
                </div>
              {/each}
            </div>
          {/each} -->
          <table class="border">
            {#each anime.relations as relations}
              <tr class="border">
                <td class="text-lg">{relations.relation}:</td>
                <td class="flex flex-col gap-2 border">
                  {#each relations.entry as entry}
                    <div>
                      <a
                        target="_blank"
                        class="hover:text-blue-900"
                        href={`/pages/anime/${entry.mal_id}`}>{entry.name}</a
                      >
                    </div>
                  {/each}
                </td>
              </tr>
            {/each}
          </table>
        </div>
      </div>
      <div class="flex flex-col w-1/2 mx-4">
        <span class="text-xl font-bold text-center text-orange-700"
          >Streaming</span
        >
        <div class="grid grid-cols-4 gap-4 my-4">
          {#each anime.streaming as streaming}
            <div class="flex flex-col items-center gap-1">
              <a href={streaming.url} target="_blank">
                <img
                  class="rounded-lg"
                  src={`/${streaming.name.toLowerCase()}.png` ||
                    "/not-found.jpg"}
                  width="100"
                  alt="img"
                />
              </a>
              <span>{streaming.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </article>
  </section>

  <section class="p-4 rounded-md bg-zinc-900 mx-44">
    <span class="text-3xl font-semibold text-cyan-900"> Character!</span>
    <div class="my-4">
      {#await getCharacter() then character}
        <div class="grid grid-cols-2 gap-8">
          {#each character as item}
            <div class="flex justify-between">
              <div class="flex flex-row gap-3">
                <img
                  src={item.character.images.webp.image_url}
                  class="w-24 h-24 rounded-xl"
                  alt=""
                />
                <div class="flex flex-col gap-1 text-md">
                  <span>{item.character.name}</span>
                  <span class="text-xs">{item.role}</span>
                </div>
              </div>
              <div></div>
              <div class="flex flex-row-reverse gap-1">
                {#each item.voice_actors.splice(0, 1) as voice_actors}
                  <img
                    src={voice_actors.person.images.jpg.image_url}
                    class="w-24 h-24 rounded-xl"
                    alt=""
                  />
                  <div class="flex flex-col items-end gap-1">
                    <a
                      class="hover:font-bold hover:text-cyan-950"
                      href={`/pages/seiyuu/${voice_actors.person.mal_id}`}
                    >
                      <span class="text-md">{voice_actors.person.name}</span></a
                    >

                    <span class="text-xs">{voice_actors.language}</span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      {/await}
    </div>
  </section>
</main>
