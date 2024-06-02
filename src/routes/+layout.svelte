<script>
  import "../app.css";
</script>

<body class="w-full min-h-screen">
  <nav
    class="flex items-center justify-between p-5 text-white border-b-2 border-cyan-950"
  >
    <div class="flex flex-row">
      <a href="/" class="text-xl phone:text-xs tablet:text-base">Jiko Anime</a>
      <div class="flex flex-row gap-4">
        <a href="/pages/anime" class="text-xl phone:text-xs tablet:text-base"
          >Anime</a
        >
        <a href="/pages/manga" class="text-xl phone:text-xs tablet:text-base"
          >Manga</a
        >
        <a href="/pages/seiyuu" class="text-xl phone:text-xs tablet:text-base"
          >People and Seiyuu</a
        >
      </div>
    </div>
    <a
      target="_blank"
      href="https://rioxiu.my.id"
      class="text-xl phone:text-xs tablet:text-base">About Me</a
    >
  </nav>
  <slot />
</body>
