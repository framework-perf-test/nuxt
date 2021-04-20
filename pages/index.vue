<template>
  <h1>Hello {{ title }}!!!</h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Nuxt',
  },
  data() {
    return {
      title: 'World',
    }
  },
})
</script>

<style></style>
