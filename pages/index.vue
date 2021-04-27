<template>
  <section>
    <h2>Home</h2>
    <Todos />
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head: {
    title: 'Lighthouse Test | Nuxt',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Lighthouse Test | Nuxt',
    },
  ],
})
</script>

<style></style>
