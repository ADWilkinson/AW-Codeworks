<template>

<v-toolbar>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn v-for="link in links" :key="link.id" v-on:click='redirect(link)' v-text="link" flat></v-btn>

  </v-toolbar-items>
</v-toolbar>

</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      links: ['Dogebot', 'Features', 'Discord']
    }
  },
  methods: {
    redirect(view) {
      this.$router.push('/' + view);
    }
  },

}
</script>

<style>

</style>
