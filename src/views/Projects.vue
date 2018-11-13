<template>
  <div>
    <v-layout mb-5>
      <v-flex xs12>
        <h2 class="title mb-3" id="portfolio" v-text="'Projects'" />
        <alpha-gallery :categories="categories" :projects="projects" />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import AlphaGallery from '../components/alpha/Gallery';

export default {
  components: {
    AlphaGallery
  },
  data() {
    return {
      categories: [],
      projects: []
    };
  }
};
</script>
