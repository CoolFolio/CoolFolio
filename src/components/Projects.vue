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
  <main class="bg-bray-500 p-5" v-if="(Settings.me || {}).projects">
    <div>
      <h1 class="mt-10 text-5xl text-center font-bold">
        <span :class="`text-${localStorage.color}`">Projects</span> I've <br />
        contributed to
      </h1>
    </div>
    <div :id="((Settings.elements || {}).projects || {}).id"></div>
    <div
      class="w-full grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-10 grid gap-4"
    >
      <div v-for="project in Settings.me.projects" :key="project">
        <div
          class="p-4 w-full bg-bray-400 hover:scale-105 rounded duration-300 transition"
        >
          <h1 v-if="project.name" class="text-2xl font-semibold">
            {{ project.name }}
          </h1>
          <p class="text-xs" v-if="project.description">
            {{ project.description }}
          </p>
          <img
            v-if="project.image"
            :src="project.image"
            class="rounded mt-3 w-full object-cover"
          />
          <div
            v-if="project.buttons"
            :class="`grid w-full ${
              (project.buttons || []).length == 2
                ? 'grid-cols-2'
                : 'grid-cols-1'
            } gap-3 mt-3`"
          >
            <div
              class="w-full flex"
              v-for="button in project.buttons || []"
              :key="button"
            >
              <button
                v-if="button.isHyper != true"
                :class="`w-full py-3 text-white rounded text-sm ${
                  button.themeColor ? `bg-${localStorage.color}` : 'bg-bray-300'
                }`"
                @click="button.onClick"
              >
                {{ button.text }}
              </button>
              <a
                v-if="button.isHyper == true"
                :href="button.url"
                :target="button.target"
                :class="`w-full py-3 text-center text-white rounded text-sm ${
                  button.themeColor ? `bg-${localStorage.color}` : 'bg-bray-300'
                }`"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
