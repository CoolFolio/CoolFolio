<script>
export default {
  name: "Component",
  data() {
    return {
      Settings: window.Settings,
      localStorage: localStorage,
    };
  },
  async created() {},
};
</script>
<template>
  <main class="grid-cols-1 lg:grid-cols-3 gap-5 p-5 grid" v-if="Settings.me">
    <div class="w-full lg:p-5" v-if="Settings.me.avatar">
      <img
        :src="Settings.me.avatar.src"
        :class="`${Settings.me.avatar.rotateOnHover ? `hover:rotate-3` : ``} ${
          Settings.me.avatar.scaleOnHover ? `hover:scale-105` : ``
        } ${
          Settings.me.avatar.glowOnHover ? `hover:opacity-100` : ``
        } duration-300 opacity-60 hover:rounded cursor-pointer w-full transition-all bg-bray-300`"
      />
    </div>
    <div class="lg:p-5 px-1 col-span-2">
      <div>
        <h1 :class="`font-black py-2 text-6xl`">
          <span>Hi, I'm </span>
          <span :class="`text-${localStorage.color}`">
            {{ Settings.me.firstName }}</span
          >
        </h1>
        <p v-if="Settings.me.about" class="text-2xl">{{ Settings.me.about }}</p>
      </div>
      <div v-if="Settings.navBox" class="mt-4 md:mr-5">
        <div class="gap-5 grid md:grid-cols-2">
          <a
            :href="box.url"
            class="group cursor-pointer"
            v-for="box in Settings.navBox.boxes"
            :key="box"
          >
            <div
              :class="`bg-bray-400 duration-300 transition group-hover:text-white group-hover:bg-${localStorage.color} p-5 rounded group`"
            >
              <h2 :class="`flex space-x-2`">
                <span>
                  <object
                    v-if="box.icon"
                    type="text/html"
                    class="text-gray-300 h-6"
                    :data="box.icon"
                  ></object>
                </span>
                <span>{{ box.name }}</span>
              </h2>
            </div>
          </a>
        </div>
      </div>
    </div>
  </main>
</template>
