<script lang="ts">
  export let data: any = [];
  console.log(data);
</script>

<nav class="flex justify-between p-5 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
  <a href="/page">Page</a>
</nav>

<main class="my-10">
  <section class="bg-zinc-900 p-4 mx-44 rounded-md">
    <div class="flex justify-between items-center">
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
            >⭐{data.score}</span
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
    <div class="my-10 flex flex-row gap-4">
      <img class="rounded-md" src={data.images.webp.large_image_url} alt="" />
      <div class="flex gap-4 flex-col">
        <div class="flex flex-col">
          <span class="text-2xl">Title</span>
          <span class="">{data.title_english}</span>
          <span class="">{data.title_japanese}</span>
        </div>
        <span>Synopsis: {data.background}</span>
        <div class="flex gap-4">
          {#each data.themes as themes}
            <div>
              <span class="bg-slate-800 rounded-lg p-2">{themes.name}</span>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</main>
