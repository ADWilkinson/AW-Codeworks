<template>
<v-container py-5 class="panel-bg">
  <v-layout>
     <v-flex sm2 class="sidepanel-bg panel-border-r"></v-flex>
    <v-flex xs12 sm8 class="panel-border-t title-bg">
      <v-container fluid grid-list-md text-xs-left>
        <v-layout >
        <v-flex xs12 class="text-center">
          <h1 class="text-uppercase">Blog</h1>
        </v-flex>
       </v-layout>
      </v-container>
    </v-flex>
       <v-flex sm2 class="sidepanel-bg panel-border-l"></v-flex>
  </v-layout>
  <v-layout>
    <v-flex sm2 class="sidepanel-bg panel-border-r"></v-flex>
    <v-flex xs12 sm8 class="border-top">
      <v-container fluid grid-list-md text-xs-left>
        <v-layout >
          <v-flex xs3 offset-xs1>
            <v-avatar
            :tile="false"
            :size="70"
            color="grey"
            >
            <img :src="require('../../dist/static/Wordmark_White.svg')" alt="avatar">
            </v-avatar>
          </v-flex>
        <v-flex xs9>
          <h3>{{this.userData.name}}</h3>
          <p>{{this.userData.bio}} {{this.userData.followers}}</p>
        </v-flex>
       </v-layout>
      </v-container>
    </v-flex>
       <v-flex sm2 class="sidepanel-bg  panel-border-l"></v-flex>
  </v-layout>
  <v-layout>
    <v-flex sm2 class="sidepanel-bg panel-border-r"></v-flex>
    <v-flex xs12 sm6 offset-sm1 class="panel-border-t">
      <v-container v-for="(value, key) in getPostData" :key="key">
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
          
            <h5 class="pr-1">{{Math.round(value.readingTime)}} Minute Read |</h5>
            <h5>{{value.wordCount}} Words |</h5>
            <v-btn class="pl-1" :href="value.url" target="_blank" flat color="yellow">Go to Article</v-btn>
          </v-card-actions>
        </v-card>
        <v-divider></v-divider>
      </v-container>
    </v-flex>
       <v-flex sm2 offset-sm1 class="sidepanel-bg panel-border-l"></v-flex>
  </v-layout>
<v-layout>
    <v-flex sm2 class="sidepanel-bg panel-border-r"></v-flex>
    <v-flex xs12 sm8 class="text-center">
      <v-btn flat color="yellow" @click="retrieveExtraPosts()" outline>View More</v-btn>
    </v-flex>
       <v-flex sm2 class="sidepanel-bg  panel-border-l"></v-flex>
  </v-layout>
</v-container>

</template>
<script>
export default {
  data() {
    return {
      userData: [],
      postData: [],
      extraPosts: []
    };
  },
  computed: {
    getPostData() {
      return this.postData;
    }
  },
  created() {
    const maxPosts = 5;
    let vm = this;

    if (!sessionStorage.getItem('mediumUserData') || !sessionStorage.getItem('mediumPostData')) {
      return vm.$store.dispatch('blog/retrieveMediumData').then(() => {
        let data = vm.$store.getters['blog/getMediumData'];

        vm.userData = Array.from(data.user);
        let postArray = Array.from(data.posts);
        if (postArray.length <= maxPosts) {
          vm.postData = postArray;
          sessionStorage.setItem('mediumPostData', JSON.stringify(postArray));
        } else {
          let slicedArr = postArray.slice(0, maxPosts);
          vm.postData = slicedArr;
          sessionStorage.setItem('mediumPostData', JSON.stringify(slicedArr));
          vm.extraPosts = postArray.slice(maxPosts, postArray.length);
        }
        sessionStorage.setItem('mediumUserData', JSON.stringify(data.user));
      });
    } else {
      vm.userData = JSON.parse(sessionStorage.getItem('mediumUserData'));
      vm.postData = JSON.parse(sessionStorage.getItem('mediumPostData'));
    }

    console.log(this.postData);
  },
  methods: {
    retrieveExtraPosts() {
      let vm = this;
      if (vm.extraPosts.length > 0) {
        for (let index = 0; index < vm.extraPosts.length; index++) {
          vm.postData.push(vm.extraPosts.shift());
        }
        sessionStorage.setItem('mediumPostData', JSON.stringify(vm.postData));
      }
    }
  }
};
</script>

<style scoped>
.title-colour {
  color: #ddecff;
}

.panel-bg {
  background-color: #212121;
}

.title-bg {
  background-color: #a3bad6cf;
}

.sidepanel-bg {
  background-color: #33333326;
}

.border-top {
  border-top: solid thin white;
}

.text-center {
  text-align: center;
}

.panel-border-r {
  border-right: solid thin #ffffff38;
}

.panel-border-l {
  border-left: solid thin #ffffff38;
}

.panel-border-t {
  border-top: solid thin #ffffff38;
}

.panel-border-b {
  border-bottom: solid thin #ffffff38;
}
</style>

