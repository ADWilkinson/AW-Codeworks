<template>
  <v-app dark>
    <Navbar rootTab='Home' :navLinks='links'></Navbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>
<script>
import Navbar from '@/components/Navbar.vue';

export default {
  components: {
    Navbar
  },
  data() {
    return {
      links: ['Home', 'Blog', 'Projects']
    };
  }
};
</script>

<style lang="scss">
</style>
