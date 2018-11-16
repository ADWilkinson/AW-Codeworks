<template>
<v-container py-5>
    <!-- <v-layout>
    <h1>Blog</h1>
    <p>{{this.userData.name}} // {{this.userData.bio}} // {{this.userData.followers}}</p>
   
-->
      
<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>

    <v-container v-for="(value, key) in postData" :key="key">
      <v-card>
        <v-img :contain="true" class="pa-4 mx-4"
          :src="require('../../dist/static/Wordmark_White.svg')"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{value.title}}</h3>
            <div>{{value.subtitle}}</div>
          </div>
        </v-card-title>

        <v-card-actions>
          
          <h5 class="pr-1" flat color="orange">{{Math.round(value.readingTime)}} Minute Read |</h5>
          <h5 flat color="orange">{{value.wordCount}} Words |</h5>
          <v-btn class="pl-1" :href="value.url" target="_blank" flat color="orange">Go to Article</v-btn>
        </v-card-actions>
      </v-card>
      <v-divider></v-divider>
</v-container>

    </v-flex>
  </v-layout>
</template>

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
  computed: {
  },
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
