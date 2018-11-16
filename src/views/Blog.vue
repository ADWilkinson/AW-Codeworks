<template>
<v-container py-5>
  <v-layout>
  <v-flex xs12 sm6 offset-sm3>
    <v-container fluid grid-list-md text-xs-left>
    <v-layout >
    <v-flex xs4>
   <v-avatar
          :tile="false"
          :size="70"
          color="grey"
        >
          <img :src="require('../../dist/static/Wordmark_White.svg')" alt="avatar">
        </v-avatar>
    </v-flex>
    <v-flex xs8>
    <h3>{{this.userData.name}}</h3>
    <p>{{this.userData.bio}} {{this.userData.followers}}</p>
    </v-flex>
          </v-layout>
  </v-container>
  </v-flex>
  </v-layout>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
  <v-container v-for="(value, key) in postData" :key="key">
      <v-card :raised="false" :hover="true" :href="value.url" target="_blank">
        <v-img :contain="true" class="pa-4 mx-4"
          :src="require('../../dist/static/Wordmark_White.svg')"
        ></v-img>

        <v-card-title primary-title border class="border-top">
          <div>
            <h3 class="headline mb-0 title-colour">{{value.title}}</h3>
            <p class="pt-2 pb-0">{{value.subtitle}}</p>
          </div>
        </v-card-title>

        <v-card-actions class="border-top">
          
          <h5 class="pr-1" flat color="orange">{{Math.round(value.readingTime)}} Minute Read |</h5>
          <h5 flat color="orange">{{value.wordCount}} Words |</h5>
          <v-btn class="pl-1" :href="value.url" target="_blank" flat color="orange">Go to Article</v-btn>
        </v-card-actions>
      </v-card>
      <v-divider></v-divider>
</v-container>

    </v-flex>
  </v-layout>
 </v-container>

</template>
<script>
export default {
  data() {
    return {
      userData: {},
      postData: {}
    };
  },
  computed: {},
  created() {
    if (!sessionStorage.getItem('mediumUserData') || !sessionStorage.getItem('mediumPostData')) {
      return this.$store.dispatch('blog/retrieveMediumData').then(() => {
        let data = this.$store.getters['blog/getMediumData'];
        this.userData = data.user;
        this.postData = data.posts;
        sessionStorage.setItem('mediumUserData', JSON.stringify(data.user));
        sessionStorage.setItem('mediumPostData', JSON.stringify(data.posts));
      });
    } else {
      this.userData = JSON.parse(sessionStorage.getItem('mediumUserData'));
      this.postData = JSON.parse(sessionStorage.getItem('mediumPostData'));
    }
  }
};
</script>

<style scoped>
.title-colour {
  color: #a3bad6;
}

.border-top {
  border-top: solid thin white;
}
</style>

