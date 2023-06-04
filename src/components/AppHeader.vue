<script lang="ts">
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <nav>
    <router-link to="/">Overview</router-link>
    <section>
      <router-link to="/budget">Budget</router-link>
      <router-link to="/tasks">Tasks</router-link>
    </section>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

section {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

a {
  margin: 15px;
  text-decoration: none;
}
</style>
