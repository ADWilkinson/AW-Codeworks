<template>
  <v-container class="dark-panel-bg" py-5>
    <v-layout >
    
    <v-flex xs12 sm10 offset-sm1>
      <v-card class="margin-auto" max-width="100%">
        <v-img
          :src="require('../../static/MVIMG_20180331_110931.jpg')"
          aspect-ratio="1.5"
          height="400"
       
          >
        </v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-1 text-uppercase"><strong>Profile</strong></h3>
            <p>London based Software Engineer specialising in the latest technologies within the <strong>.NET and JavaScript</strong> ecosystems. Strong knowledge and experience in developing enterprise-grade web applications covering <strong>SQL databases, web API development, front-end development, integration and unit testing.</strong>
            
            Further experience in developing automation frameworks from scratch for large web projects using <strong>Selenium & Specflow</strong> in C#. Comfortable working in multi disciplinary, <strong>agile environments</strong> using both front and back end technologies with a core drive and passion for innovation on each project worked on in addition to being self-sufficient and proactive about learning.
            </p>
           </div>
        </v-card-title>

         <v-layout class="justify-center">
        <v-card-actions>
          <v-flex> 
            <h3 class=" text-uppercase">Core Languages / Frameworks</h3>
          </v-flex>
        </v-card-actions>
        </v-layout>

        <v-layout class="justify-center">
        <v-card-actions class="pb-2" flex v-for="item in skillIcons" :key="item.skill">
          <v-flex> 
          <v-chip :color="item.colour">
            <v-icon left>{{item.icon}}</v-icon> 
            <h4>{{item.skill}}</h4>
          </v-chip>
          </v-flex>
        </v-card-actions>
        </v-layout>

          <v-layout class="justify-center pb-2">
        <v-card-actions>
          <v-flex> 
            <h4 class="text-uppercase text-center pb-1">Other skills</h4>
            <p>Selenium - Specflow - Jest - ASP.NET - MVC - JQuery - REST APIs - SQL Server - Entity Framework</p>
          </v-flex>
        </v-card-actions>
        </v-layout>
      </v-card>
      
    </v-flex>
  </v-layout>

 <v-layout>
    <v-flex id="tree-container" class="mt-5 dark-border tree-padding" xs12 sm4 offset-sm2>
    
      <h2> Projects</h2>
      <v-divider></v-divider>
      
      <treeview @clicked="selectTab()" :open="open" :tree="tree" :icons="icons" :items="items" ></treeview>
      
   </v-flex>
     <v-flex class="mt-5" xs12 sm4>
    <v-card class="margin-auto" height="100%">

        <v-card-title primary-title>
          <div>
            <h3 class="mb-1 text-uppercase"><strong>File: {{this.folder !== undefined ? this.folder.name : '' }}</strong></h3>
            <p v-html="this.folder !== undefined ? this.folder.text : ''"></p>
           </div>
        </v-card-title>

        <v-card-actions style="  position: absolute; bottom: 0; right: 0;">
          <v-flex> 
            <v-btn target="_blank" :href="this.folder !== undefined ? this.folder.link : ''">Github Repo</v-btn>
          </v-flex>
        </v-card-actions>
    </v-card>
      
   
   </v-flex>
 </v-layout>
 
 <v-layout mb-5 mt-5>
    <v-flex xs1 sm3></v-flex>
    <v-flex xs10 sm6>
      <v-layout justify-center>
        <div style="text-decoration: none;">
           <v-avatar class="ma-3" size="76px" :color="this.contacts[0].color">
           <v-icon dark large v-text="this.contacts[0].icon" />
           </v-avatar>
        </div>
       </v-layout>
      <contact-form></contact-form>
    </v-flex>
    <v-flex xs1 sm3></v-flex>
 </v-layout>

</v-container>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue';
import Treeview from '@/components/Treeview.vue';

export default {
  name: 'home',
  components: {
    ContactForm,
    Treeview
  },
  data() {
    return {
      folder: {},
      flattenedData: [],
      skillIcons: [
        {
          skill: 'Vuejs',
          colour: '#69b97ab8',
          icon: 'mdi-vuejs'
        },
        {
          skill: 'HTML5',
          colour: '#f99d9df2',
          icon: 'mdi-language-html5'
        },
        {
          skill: 'JavaScript',
          colour: '#fff176d1',
          icon: 'mdi-language-javascript'
        },
        {
          skill: 'C#',
          colour: '#d8a4f9cf',
          icon: 'mdi-language-csharp'
        },
        {
          skill: 'CSS3',
          colour: '#ffc36ad1',
          icon: 'mdi-language-css3'
        },
        {
          skill: 'Nodejs',
          colour: '#69b97ab8',
          icon: 'mdi-nodejs'
        },
        {
          skill: 'TypeScript',
          colour: '#7bc5ffba',
          icon: 'mdi-language-typescript'
        }
      ],
      contacts: [
        {
          color: '#69b97ab8',
          icon: 'mdi-email'
        },
        {
          color: 'indigo',
          icon: 'mdi-instagram',
          link: 'https://www.instagram.com/andydwilkinson/'
        }
      ],
      open: ['public'],
      icons: {
        html: 'mdi-language-html5',
        js: 'mdi-nodejs',
        json: 'mdi-json',
        md: 'mdi-markdown',
        pdf: 'mdi-file-pdf',
        png: 'mdi-file-image',
        txt: 'mdi-file-document-outline',
        xls: 'mdi-file-excel'
      },
      tree: [],
      items: [
        {
          name: '.private_repositories',
          children: [
            {
              name: 'Private.md',
              icon: 'md',
              text:
                'A few projects I am working on either in a professional capacity or private are not publically visible. Please get in contact if you would like to know more.',
              link: 'https://github.com/ADWilkinson'
            }
          ]
        },
        {
          name: 'public_repositories',
          children: [
            {
              name: 'DogeBot.md',
              icon: 'md',
              text:
                'DogeBot is a multilayered chat bot project ultimately consisting of:<br><br> <ul><li>a .NET Core Web API project hosted in the cloud</li><li>a nodejs application which is the bot itself which interacts and handles user requests</li><li>and finally a front end web application to be planned.</li></ul>',
              link: 'https://github.com/DogeNet/DogeBot'
            },
            {
              name: 'AWCodeWorks.md',
              icon: 'md',
              text:
                'This website! This website is a showcase in knowledge in modern front end related frameworks and packages. Vue, Vuetify, Vue Router, Vuex, Webpack, Babel, Firebase (Cloud Functions), Axios, Eslint, ES6+ Standards',
              link: 'https://github.com/ADWilkinson/AW-Codeworks'
            },
            {
              name: 'UnityAsset.ObjectPoolFactory.md',
              icon: 'md',
              text:
                'A helper asset that I had published on the Unity asset store for a limited time before not having the time to maintain the package. This tool would generate any number of customisable objects for you at during development or at runtime. Proved very useful for quick prototyping.',
              link: 'https://github.com/ADWilkinson/UnityAsset.ObjectPoolFactory'
            },
            {
              name: 'UnityAsset.ObjectGenerator.md',
              icon: 'md',
              text:
                "A helper asset I had published on the Unity asset store for a limited time before not having the time to maintain the package. This tool allowed you to generate fully functional and customisable 'object pools', which ultimate allow for much better memory usage compared to constantly destroying and reinstantiated objects.",
              link: 'https://github.com/ADWilkinson/UnityAsset.ObjectGenerator'
            }
          ]
        },
        {
          name: 'github.profile',
          icon: 'json',
          text:
            'Please follow the link below to navigate to my Github profile where you will see that I am largely active within development projects and always pushing to learn new skills, even beyond the scope of my current industry job.',
          link: 'https://github.com/ADWilkinson'
        },
        {
          name: '.gitignore',
          icon: 'txt',
          text: 'test'
        }
      ]
    };
  },
  computed: {
    currentFolder() {
      return this.$store.getters['home/getCurrentFolder'];
    },
    folderInfo() {
      return this.flattenedData.find(folder => folder.name == this.currentFolder);
    }
  },
  methods: {
    selectTab() {
      const vm = this;
      let map = new Map(vm.items.entries());
      let array = [];

      for (let obj of map) {
        if (obj[1].children) {
          for (let child in obj[1].children) {
            array.push(obj[1].children[child]);
          }
        } else {
          array.push(obj[1]);
        }
      }

      this.flattenedData = array;
      this.folder = this.folderInfo;
    }
  },
  mounted() {
    // let height = document.getElementById('tree-container').clientHeight
    // console.log(height)
  }
};
</script>

<style scoped>
.text-center {
  text-align: center;
}

.dark-panel-bg {
  background-color: #212121;
}
.margin-auto {
  margin: auto;
}
.dark-border {
  border: thin solid #424242;
}
.tree-padding {
  padding: 10px;
  padding-left: 20px !important;
}
</style>

