<template>
  <div>
    <h1>Blog</h1>
    <p>{{this.getMediumData}}</p>
  </div>
</template>
<script>
export default {
  computed: {
    getMediumData() {
      return this.$store.getters['blog/getMediumData'];
    }
  },
  created() {
    this.$store.dispatch('blog/retrieveMediumData');
  }
};
</script>
