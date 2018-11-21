<template>
<v-container py-5 class="panel-bg">
  <v-layout>
     <v-flex sm2 class="sidepanel-bg panel-border-r"></v-flex>
    <v-flex xs12 sm8 class="panel-border-t title-bg ">
      <v-container fluid grid-list-md text-xs-left>
        <v-layout >
        <v-flex xs12 class="text-center">
          <h1 class="text-uppercase">Published Articles</h1>
        </v-flex>
       </v-layout>
      </v-container>
    </v-flex>
       <v-flex sm2 class="sidepanel-bg panel-border-l"></v-flex>
  </v-layout>
  <v-layout>
    <v-flex sm2 class="sidepanel-bg panel-border-r"></v-flex>
    <v-flex xs12 sm8 class="border-top">
      <v-container fluid grid-list-md text-xs-left class="off-white-bg">
        <v-layout >
          <v-flex sm2></v-flex>
          <v-flex sm2 xs12>
            <v-avatar
            :tile="false"
            :size="80"
            color="grey"
            >
            <img :src="require('../../static/MVIMG_20180331_110930.jpg')" alt="avatar">
            </v-avatar>
          </v-flex>
        <v-flex sm6>
          <h3 class="text-dark-gray">{{this.userData.name}}</h3>
          <p class="text-dark-gray">{{this.userData.bio}} {{this.userData.followers}}</p>
        </v-flex>
           <v-flex xs2></v-flex>
       </v-layout>
      </v-container>
    </v-flex>
       <v-flex sm2 class="sidepanel-bg  panel-border-l"></v-flex>
  </v-layout>
  <v-layout class="panel-border-b">
    <v-flex sm2 class="sidepanel-bg panel-border-r"></v-flex>
    <v-flex sm1 class="off-white-bg"></v-flex>
    <v-flex xs12 sm6 class="panel-border-t pt-3 off-white-bg pb-3">
      
      <div v-if="loading" class="text-center">
        <h3 class="pt-3 pb-3 text-dark-gray">Loading posts...</h3>
      </div>

      <v-container v-for="(value, key) in getPostData" :key="key">
        <v-card :raised="false" :hover="true" :href="value.url" :max-width="600" target="_blank">
          <v-img :contain="true" class="pa-4 mx-4"
            :src="require('../../static/Wordmark_White.svg')"
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
     <v-flex sm1 class="off-white-bg"></v-flex>
       <v-flex sm2 class="sidepanel-bg panel-border-l"></v-flex>
  </v-layout>
<v-layout>
    <v-flex sm2 class="sidepanel-bg panel-border-r"></v-flex>
    <v-flex xs12 sm8 class="text-center pt-3 pb-1">
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
      userData: {},
      postData: [],
      extraPosts: [],
      gen: {},
      loading: false
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

    this.gen = this.returnPostGenerator();

    if (!sessionStorage.getItem('mediumUserData') || !sessionStorage.getItem('mediumPostData')) {
      vm.loading = true;
      return vm.$store.dispatch('blog/retrieveMediumData').then(() => {
        vm.loading = false;
        let data = vm.$store.getters['blog/getMediumData'];
        vm.userData = data.user;
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
  },
  methods: {
    retrieveExtraPosts() {
      let vm = this;
      if (vm.extraPosts.length > 0) {
        let post = vm.gen.next().value;
        if (post !== undefined) {
          vm.postData.push(post);
        }
        sessionStorage.setItem('mediumPostData', JSON.stringify(vm.postData));
      }
    },
    returnPostGenerator() {
      let vm = this;
      function* postGenerator() {
        for (let post of vm.extraPosts) {
          yield post;
        }
      }

      let gen = postGenerator();
      return gen;
    }
  }
};
</script>

<style scoped>
.text-dark-gray {
  color: #2f2f2f;
}

.off-white-bg {
  background-color: #ffffffcc;
}

.title-colour {
  color: #69b97a;
}

.panel-bg {
  background-color: #212121;
}

.title-bg {
  background-color: #69b97a70;
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
  border-top: solid thick #333333b2;
}

.panel-border-b {
  border-bottom: solid thin #ffffff38;
}
</style>
