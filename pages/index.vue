<template>
  <section>
    <h2 class="text-h4">Home</h2>
    <Todos />
  </section>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Todos from '../components/Todos.vue'

@Component({
  components: { Todos },
  meta: {
    title: 'Lighthouse Test | Nuxt',
    meta: {
      description: { name: 'description', content: 'Lighthouse Test | Nuxt' },
    },
  },
})
export default class PageIndex extends Vue {}
</script>
