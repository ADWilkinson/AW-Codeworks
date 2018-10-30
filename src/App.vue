<template>
  <v-app>
  <Navbar></Navbar>
  <v-content>
        <v-container fluid>
            <router-view></router-view>
        </v-container>
    </v-content>
    <v-footer></v-footer>
</v-app>
</template>
<script>
import Navbar from '@/components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
</style>
