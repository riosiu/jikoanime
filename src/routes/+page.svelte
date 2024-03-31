<script lang="ts">
  export let data: any = [];
  console.log(data);
</script>

<nav class="flex justify-between p-5 bg-slate-800 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
  <a href="/page">Page</a>
</nav>

<main class="">
  <h1 class="text-center font-bold text-2xl mt-4">Top Populer on this arc!</h1>
  <article class="grid grid-cols-4 mx-4 gap-4 my-10">
    {#each data.data as item}
      <div
        class="bg-zinc-800 rounded-lg text-white flex justify-center flex-col items-center gap-3"
      >
        <img
          src={item.images.webp.image_url}
          alt={item.title}
          width="300"
          height="300"
          class=" object-cover rounded-t-lg mt-4"
        />
        <div class="flex flex-col items-center gap-[1px]">
          <span>{item.rank}</span>
          <a href={`/anime/${item.mal_id}`}>{item.title}</a>
          <span>{item.title_japanese}</span>
          <span>{item.year}</span>
          <span>Skor ⭐:{item.score}</span>
        </div>
        <!-- <span>{item.studios.name}</span> -->
      </div>
    {/each}
  </article>
</main>
