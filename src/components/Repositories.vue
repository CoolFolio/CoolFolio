<script>
export default {
  name: "Component",
  data() {
    return {
      repos: [],
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  async created() {
    fetch(
      `https://api.github.com/users/${
        (((this.Settings || {}).socials || {}).github || {}).username
      }/repos`
    )
      .then((response) => response.json())
      .then((data) => {
        this.repos = data;
      });
  },
};
</script>
<template>
  <main class="bg-bray-500 p-5" v-if="(Settings.socials || {}).github && repos">
    <div>
      <h1 class="mt-10 text-5xl text-center font-bold">
        My Github
        <br />
        <span :class="`text-${localStorage.color}`">Repositories</span>
      </h1>
    </div>
    <div :id="((Settings.elements || {}).repositories || {}).id"></div>
    <div
      class="w-full grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-10 grid gap-5"
    >
      <a
        v-for="repo in repos"
        :key="repo"
        :href="repo.html_url"
        target="_blank"
        class="w-full flex"
      >
        <a
          class="w-full bg-bray-400 hover:scale-105 duration-300 transition rounded p-4"
        >
          <h1 class="text-sm">{{ repo.name }}</h1>
          <h2 class="text-xs text-gray-400">{{ repo.full_name }}</h2>
        </a>
      </a>
    </div>
    <div class="py-3"></div>
  </main>
</template>
