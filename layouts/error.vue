<template>
  <v-app dark>
    <v-main>
      <v-container fluid class="fill-height">
        <v-row align="center">
          <v-col>
            <v-row justify="center">
              <v-col cols="4">
                <h1 class="text-h4 white--text">
                  The link you clicked may be broken or the page may have been
                  removed.
                </h1>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col cols="4">
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  layout: 'bioviz-error',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
.logo-container {
  height: 90px;
}
</style>
