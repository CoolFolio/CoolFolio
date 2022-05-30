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
    <div class="w-full grid-cols-2 mt-8 grid gap-5">
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
  </main>
</template>
