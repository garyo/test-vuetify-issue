<template>
  <v-container fluid class="pa-0">
          <v-data-table light dense disable-sort
                        hide-default-footer
            :headers="prices.headers"
            :items="prices.prices.academic"
            >
          </v-data-table>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'
import { prices } from '~/pricing'

export default defineComponent({
  layout: 'bioviz',
  components: {
  },
  setup(_props, context) {
    return { prices }
  },
})
</script>

<style lang="scss">
.player {
  max-width: 100% !important;
}
</style>
