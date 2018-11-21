<template>

<v-toolbar class="border-bottom">
  <v-spacer class='font-weight-bold title title-colour'>AWCODEWORKS</v-spacer>
  <v-toolbar-items>
    <v-btn 
    v-for='link in links' 
    :key="link.id" 
    v-on:click='redirect(link)' 
    :class='[{ active: link === currentTab ? true : false }, "title-colour"]' 
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
      type: String,
      required: true
    },
    navLinks: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      links: []
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
  created() {
    this.links = this.navLinks;
  },
  mounted() {
    if (storage.getItem('sessionCurrentTab') === null) {
      this.$store.commit('app/setCurrentTab', this.rootTab);
    } else {
      this.$store.commit(
        'app/setCurrentTab',
        storage.getItem('sessionCurrentTab')
      );
    }
  }
};
</script>

<style scoped>
.active {
  background-color: #69b97a70;
}
.title-colour {
  color: #fff;
}

.border-bottom{
  border-bottom: solid thin rgba(128, 128, 128, 0.699)
}
</style>
