<script lang="ts">
  export let data: any = [];
  console.log(data);
</script>

<nav class="flex justify-between p-5 text-white">
  <a href="/" class="text-xl">Jiko Anime</a>
  <label class="input input-bordered flex items-center gap-2">
    <input type="text" class="grow" placeholder="Search" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="currentColor"
      class="w-4 h-4 opacity-70"
      ><path
        fill-rule="evenodd"
        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
        clip-rule="evenodd"
      /></svg
    >
  </label>
</nav>

<main>
  <section class="mx-10 bg-slate-950 p-4 rounded-xl">
    <div class="flex justify-between items-center">
      <span class="font-bold text-4xl mt-4">Top Rank Anime</span>
      <a href="/top-anime" class="font-semibold text-xl">View more</a>
    </div>
    <article class="grid grid-cols-5 gap-6 my-10">
      {#each data.data as item}
        <div
          class="bg-cyan-950 rounded-lg text-white flex justify-center flex-col items-center gap-3"
        >
          <a href={`/anime/${item.mal_id}`}>
            <img
              src={item.images.webp.image_url}
              alt={item.title}
              width="300"
              height="300"
              class=" object-cover rounded-t-lg mt-4"
            />
          </a>
          <div class="flex flex-col items-center gap-[1px]">
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
