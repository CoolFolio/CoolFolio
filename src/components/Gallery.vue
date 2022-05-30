<script>
export default {
  name: "Component",
  data() {
    return {
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
};
</script>
<template>
  <main class="bg-bray-500 p-5" v-if="Settings.gallery">
    <div>
      <h1 class="mt-10 text-5xl text-center font-bold">
        A <span :class="`text-${localStorage.color}`">Gallery</span> for <br />
        my projects.
      </h1>
    </div>
    <div :id="((Settings.elements || {}).gallery || {}).id"></div>
    <div
      class="w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 flex flex-wrap mt-10 grid gap-4"
    >
      <div
        v-for="picture in Settings.gallery.data"
        :key="picture"
        :class="`h-full ${picture.long ? 'col-span-2' : 'col-span-1'} `"
      >
        <div :class="`w-full flex-wrap`">
          <img
            :src="picture.image"
            :class="`${picture.rotateOnHover ? `hover:rotate-3` : ``} ${
              picture.scaleOnHover ? `hover:scale-105` : ``
            } ${picture.glowOnHover ? `hover:opacity-100` : ``} rounded  ${
              picture.objectFit ? `object-cover` : ``
            } duration-300 transition-all w-full p-3 bg-bray-400`"
          />
        </div>
      </div>
    </div>
    <div class="py-3"></div>
  </main>
</template>
