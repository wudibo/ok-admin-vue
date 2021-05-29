<template>
  <v-app>
    <v-navigation-drawer permanent>

    </v-navigation-drawer>

    <v-app-bar app>
      <v-toolbar dark
                 prominent>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </v-toolbar>

      <v-app-bar-title>Vuetify</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-btn text>Developer</v-btn>
      <v-btn class="mr-3" text>Help</v-btn>
      <v-divider inset vertical></v-divider>
      <v-btn class="mr-4 ml-5"
          color="primary"
          plain >
        <v-icon left icon="mdi-handshake-outline"></v-icon>
        <span>John Leider</span>
      </v-btn>
    </v-app-bar>

    <v-main><!-- 给应用提供合适的间距 -->
      <v-container fluid><!-- 如果使用 vue-router -->
        <lay-main></lay-main>
<!--        <router-view></router-view>-->
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import LayMain from "./layout/LayMain.vue";

export default defineComponent({
  name: 'App',
  components: {LayMain},
  setup() {
    return {}
  }
})
</script>
