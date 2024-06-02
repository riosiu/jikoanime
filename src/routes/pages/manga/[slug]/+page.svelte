<script lang="ts">
  export let data: any = [];
  // console.log(data);
</script>

<svelte:head>
  <title>{data.title} - Jiko Anime</title>
  <meta name="description" content={data.synopsis} />
</svelte:head>

<nav class="flex justify-between p-5 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
</nav>

<main class="my-10">
  <section class="p-4 rounded-md bg-zinc-900 mx-44">
    <div class="flex items-center justify-between">
      <div class="flex flex-col gap-3">
        <span class="text-6xl font-bold">{data.title}</span>
        <div class="flex flex-row items-center gap-4 text-slate-800">
          <span class="text-gray-200">{data.status} {data.type}</span>
          <!-- <span>{data.year}</span> -->
          <div class="flex flex-row gap-2">
            {#each data.genres as genre}
              <span class="text-gray-200">{genre.name}</span>
            {/each}
          </div>
        </div>
      </div>

      <div class="flex gap-4">
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Popularity</label>
          <span class="p-4 text-2xl rounded-lg hover:bg-slate-950"
            >{data.popularity}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Rank</label>
          <span class="p-4 text-2xl rounded-lg hover:bg-slate-950"
            >{data.rank}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label class="text-slate-700" for="">Score</label>
          <span class="p-4 text-2xl rounded-lg hover:bg-slate-950"
            >⭐{data.score}</span
          >
        </div>
        <div class="flex flex-col items-center">
          <label for="" class="text-slate-700">Total Chapter</label>
          <span class="p-4 text-2xl rounded-lg hover:bg-slate-950"
            >{data.chapters || ""}</span
          >
        </div>
      </div>
    </div>
    <div class="flex flex-row gap-4 my-10">
      <img class="rounded-md" src={data.images.webp.large_image_url} alt="" />
      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <span class="text-2xl">Title</span>
          <span class="">{data.title_english}</span>
          <span class="">{data.title_japanese}</span>
        </div>
        <span>Synopsis: {data.background}</span>
        <div class="flex gap-4">
          {#each data.themes as themes}
            <div>
              <span class="p-2 rounded-lg bg-slate-800">{themes.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>
