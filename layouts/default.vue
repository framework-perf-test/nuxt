<template>
  <v-app>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="handleDrawerToggle"></v-app-bar-nav-icon>
      <v-toolbar-title>Nuxt Material Demo</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list nav>
        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <Nuxt />
        <br />
        <footer>
          Check the lighthouse results at
          <a
            href="https://lighthouse-test.github.io"
            rel="noopener"
            target="_blank"
          >
            https://lighthouse-test.github.io
          </a>
        </footer>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {},
})
export default class Default extends Vue {
  drawer = true

  handleDrawerToggle = () => {
    this.drawer = !this.drawer
  }
}
</script>
