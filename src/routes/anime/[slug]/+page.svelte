<script lang="ts">
  import { PUBLIC_API_JIKAN_URL } from "$env/static/public";
  export let data: any = [];
  console.log(data);

  //get character

  const getCharacter = async ({ params }: any) => {
    try {
      const response = await fetch(
        `${PUBLIC_API_JIKAN_URL}/character/${params.slug}/full`
      );
      console.log(params.slug);
      const data_character = await response.json();
      return data_character;
    } catch (error) {
      console.log(error);
    }
  };
</script>

<nav class="flex justify-between p-5 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
</nav>

<main class="my-10 flex flex-col gap-4">
  <section class="bg-zinc-900 p-4 mx-44 rounded-md">
    <div class="flex justify-between items-center">
      <div class="flex flex-col gap-3">
        <a href={data.url} target="_blank" class="text-4xl font-bold"
          >{data.title}</a
        >
        <div class="flex flex-row items-center gap-4 text-slate-200">
          <span>{data.status} {data.type}</span>
          <span>{data.year}</span>
          <div class="flex flex-row gap-2">
            {#each data.genres as genre}
              <span>{genre.name}</span>
            {/each}
          </div>
        </div>
      </div>
      <div class="flex gap-4 mr-4">
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Popularity</label>
          <span class="hover:bg-slate-950 p-4 text-2xl rounded-lg"
            >{data.popularity}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Rank</label>
          <span class="hover:bg-slate-950 p-4 text-2xl rounded-lg"
            >{data.rank}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Score</label>
          <span class="hover:bg-slate-950 p-4 text-2xl rounded-lg"
            >⭐ {data.score}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label for="" class="text-slate-700">Total Episodes</label>
          <span class="hover:bg-slate-950 p-4 text-2xl rounded-lg"
            >{data.episodes}</span
          >
        </div>
      </div>
    </div>
    <article class="flex flex-row p-3 gap-4">
      <img
        src={data.images.webp.large_image_url}
        alt={data.title}
        class=" object-cover rounded-t-lg mt-4"
      />
      <iframe width="1120" title={data.title} src={data.trailer.embed_url}
      ></iframe>
    </article>
    <article class="mt-10 flex flex-row gap-4">
      <div class="w-1/2">
        <span
          >Title : {data.title} {data.title_japanese} {data.title_english}</span
        >
        <hr class="bg-black my-2" />
        <span>Source: {data.source}</span>
        <hr class="bg-black my-2" />
        {#each data.studios as studios}
          <span
            >Studios : <span class="text-cyan-900">{studios.name}</span></span
          >
        {/each}
        <br />
        <br />
        <span class="text-lg font-bold">Synopsis</span>
        <hr class="bg-black my-2" />
        <span class="">{data.synopsis}</span>
        <br />
        <br />
        <span class="text-lg font-bold">Background</span>
        <hr class="bg-black my-2" />
        <span>{data.background}</span>

        <br />
        <br />
        <span class="text-lg font-bold">Relations</span>
        <hr class="bg-black my-2" />
        <div class="flex gap-3 flex-col my-4">
          {#each data.relations as relations}
            <div class="flex gap-2 flex-row">
              <span>{relations.relation}:</span>
              {#each relations.entry as entry}
                <div>
                  <a class="hover:text-blue-900" href={`/anime/${entry.mal_id}`}
                    >{entry.name}</a
                  >
                </div>
              {/each}
            </div>
          {/each}
        </div>
      </div>
      <div class="flex flex-col w-1/2 mx-4">
        <span class="text-orange-700 text-center font-bold text-xl"
          >Character</span
        >
        <!-- <div class="grid grid-cols-4 my-4 gap-4">
          {#each data.streaming as streaming}
            <div class="flex flex-col items-center gap-1">
              <a href={streaming.url} target="_blank">
                <img
                  class="rounded-lg"
                  src={`/${streaming.name.toLowerCase()}.png`}
                  width="100"
                  alt="img"
                />
              </a>
              <span>{streaming.name}</span>
            </div>
          {/each}
        </div> -->
        <!-- {#await getCharacter() then data_character}
          {#each data_character as item}
            <div>
              <span>{item.name}</span>
            </div>
          {/each}
        {/await} -->
      </div>
    </article>
  </section>

  <!-- <section class="bg-zinc-900 p-4 mx-44 rounded-md"><span>hello</span></section> -->
</main>
