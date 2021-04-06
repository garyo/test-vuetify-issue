<template>
  <v-app dark>
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script lang="ts">
// NOTE: Layouts has to use classic way to define Vue component
export default {
  data() {
    return {}
  },
}
</script>

<style lang="scss">
html,
body {
  background-color: black;
}
</style>
