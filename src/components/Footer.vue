<script>
export default {
  name: "Component",
  data() {
    return {
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  async created() {
    document.title = (this.Settings.website || {}).title;
  },
};
</script>

<!-- You DO NOT have the right to remove/alter this Component/Element-->

<template>
  <main class="p-4 w-full" v-if="Settings">
    <main class="bg-bray-400 w-full p-4 rounded sm:grid-cols-2 grid">
      <div>
        <h2>&copy; CoolFolio, Licensed Under MIT License</h2>
      </div>
      <div class="w-full">
        <a
          target="_blank"
          href="https://github.com/CoolFolio/CoolFolio"
          :class="`sm:float-right text-${localStorage.color}`"
          ><span class="text-gray-300">github.com/</span>CoolFolio/CoolFolio</a
        >
      </div>
    </main>
  </main>
</template>
