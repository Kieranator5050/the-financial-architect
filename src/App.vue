<script lang="ts">
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
  name: "App",
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<template>
  <header>
    <app-header />
  </header>

  <main>
    <router-view />
  </main>

  <footer>
    <app-footer />
  </footer>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer {
  margin-top: auto;
  flex: auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
}
</style>
