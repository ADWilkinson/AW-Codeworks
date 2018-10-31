<template>

<v-toolbar>
  <v-spacer></v-spacer>
  <v-toolbar-items>
    <v-btn 
    v-for='link in links' 
    :key="link.id" 
    v-on:click='redirect(link)' 
    :class='{ active: link === currentTab ? true : false }' 
    v-text='link' 
    flat>
    </v-btn>
  </v-toolbar-items>
</v-toolbar>

</template>

<script>
var storage = window.sessionStorage;

export default {
  name: 'Navbar',
  props: {
    rootTab: {
      type: String
    }
  },
  data() {
    return {
      links: ['Home', 'Blog', 'Projects', 'Contact']
    };
  },
  computed: {
    currentTab() {
      return this.$store.getters['app/getCurrentTab'];
    }
  },
  methods: {
    redirect(view) {
      this.$store.commit('app/setCurrentTab', view);
      storage.setItem('sessionCurrentTab', view);

      if (this.currentTab === this.links[0]) {
        this.$router.push('/');
      } else {
        this.$router.push('/' + view);
      }
    }
  },
  mounted() {
    if (storage.getItem('sessionCurrentTab') === null) {
      this.$store.commit('app/setCurrentTab', this.rootTab);
    } else {
      this.$store.commit('app/setCurrentTab', storage.getItem('sessionCurrentTab'));
    }
  }
};
</script>

<style scoped>
.active {
  background-color: #a3bad6cf
  ;
}
</style>
