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
  components: {
  },
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

.disable-scrolling {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
