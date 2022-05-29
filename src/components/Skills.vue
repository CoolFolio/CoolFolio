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
  <main class="bg-bray-500 p-5" v-if="(Settings.me || {}).skills">
    <div :id="((Settings.elements || {}).skills || {}).id"></div>
    <div>
      <h1 class="mt-10 text-5xl text-center font-bold">
        My <span :class="`text-${localStorage.color}`">Skills</span>
      </h1>
    </div>
    <div class="w-full grid-cols-5 mt-8 grid gap-8">
      <div class="grid grid-cols-1 col-span-2 gap-4">
        <div
          :key="box"
          v-for="box in ((Settings.me || {} || {}).skills || {}).boxes || []"
        >
          <div
            class="p-4 cursor-pointer rounded transition duration-300 hover:bg-bray-400"
          >
            <h2 class="text-2xl text-white font-bold">{{ box.title }}</h2>
            <p class="mt-1">
              {{ box.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="col-span-3 space-y-3 text-xs gap-5">
        <div
          :key="skill"
          v-for="skill in ((Settings.me || {} || {}).skills || {}).data || []"
        >
          <h4>{{ skill.name }} - {{ skill.percent }}%</h4>
          <div class="w-full bg-bray-400">
            <div
              :style="`width: ${skill.percent || 0}%`"
              :class="`text-white text-center bg-${localStorage.color} py-3`"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
