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
    if(this.getMediumData() === null && !sessionStorage.getItem('mediumData')){ 
      this.$store.dispatch('blog/retrieveMediumData');
      sessionStorage.setItem('mediumData', this.getMediumData());
    } else {
      this.$store.commit('blog/setMediumData', sessionStorage.getItem('mediumData'));
    }
  }
};
</script>
