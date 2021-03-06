<template>
  <v-container class="dark-panel-bg" py-5>
    <!-- User Profile Section -->
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <v-card class="margin-auto" max-width="100%">
          <v-img
            :src="require('../../static/MVIMG_20180331_110931.jpg')"
            aspect-ratio="1.5"
            height="400"
          ></v-img>
          <v-container>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-2 text-uppercase">
                  <strong>Profile</strong>
                </h3>
                <p>
                  London based Software Engineer specialising in the latest technologies within the
                  <strong>.NET and JavaScript</strong> ecosystems. Strong knowledge and experience in developing enterprise-grade web applications covering
                  <strong>SQL databases, web API development, front-end development, integration and unit testing.</strong>
                  Further experience in developing automation frameworks from scratch for large web projects using
                  <strong>Selenium & Specflow</strong> in C#. Comfortable working in multi disciplinary,
                  <strong>agile environments</strong> using both front and back end technologies with a core drive and passion for innovation on each project worked on in addition to being self-sufficient and proactive about learning.
                </p>
              </div>
            </v-card-title>

            <v-layout class="justify-center">
              <v-card-actions>
                <v-flex>
                  <h3 class="text-uppercase">Core Languages / Frameworks</h3>
                </v-flex>
              </v-card-actions>
            </v-layout>

            <v-layout class="justify-center widget">
              <v-card-actions class="pb-2" flex v-for="item in skillIcons" :key="item.skill">
                <v-flex>
                  <v-chip class="widget-width" :color="item.colour">
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
                  <p>Selenium - Specflow - Jest - ASP.NET - MVC - REST APIs - SQL Server - Entity Framework - TypeScript</p>
                </v-flex>
              </v-card-actions>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Github Repositories Section -->
    <v-layout>
      <v-flex id="tree-container" class="mt-5 dark-border tree-padding" xs12 sm3 offset-sm3>
        <h2>Projects</h2>
        <v-divider></v-divider>

        <treeview @clicked="selectTab()" :open="open" :tree="tree" :icons="icons" :items="items"></treeview>
      </v-flex>
      <v-flex class="mt-5" xs12 sm3>
        <v-card class="margin-auto" height="100%">
          <v-card-title primary-title>
            <div class="file-textbox">
              <v-card-actions>
                <v-flex class="text-center pb-4">
                  <v-btn
                    target="_blank"
                    :href="this.folder !== undefined ? this.folder.link : ''"
                  >Github Repo</v-btn>
                </v-flex>
              </v-card-actions>
              <v-divider></v-divider>
              <h3 class="mb-2 mt-2 text-uppercase">
                <strong>File: {{this.folder !== undefined ? this.folder.name : '' }}</strong>
              </h3>
              <v-divider></v-divider>
              <p class="pt-2" v-html="this.folder !== undefined ? this.folder.text : ''"></p>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- Contact Form Section -->
    <v-layout mb-5 mt-5>
      <v-flex xs10 sm6 md6 offset-sm2 offset-md3>
        <v-layout justify-center>
          <div style="text-decoration: none;">
            <v-avatar class="ma-3" size="76px" :color="this.contacts[0].color">
              <v-icon dark large v-text="this.contacts[0].icon"/>
            </v-avatar>
          </div>
        </v-layout>
        <contact-form class="pt-3"></contact-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import Treeview from "@/components/Treeview.vue";

export default {
  name: "home",
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
          skill: "Vuejs",
          colour: "#69b97ab8",
          icon: "mdi-vuejs"
        },
        {
          skill: "HTML5",
          colour: "#f99d9df2",
          icon: "mdi-language-html5"
        },
        {
          skill: "JavaScript",
          colour: "#fff176d1",
          icon: "mdi-language-javascript"
        },
        {
          skill: "C#",
          colour: "#d8a4f9cf",
          icon: "mdi-language-csharp"
        },
        {
          skill: "CSS3",
          colour: "#ffc36ad1",
          icon: "mdi-language-css3"
        },
        {
          skill: "Nodejs",
          colour: "#69b97ab8",
          icon: "mdi-nodejs"
        }
        // {
        //   skill: 'TypeScript',
        //   colour: '#7bc5ffba',
        //   icon: 'mdi-language-typescript'
        // }
      ],
      contacts: [
        {
          color: "#69b97ab8",
          icon: "mdi-email"
        },
        {
          color: "indigo",
          icon: "mdi-instagram",
          link: "https://www.instagram.com/andydwilkinson/"
        }
      ],
      open: ["public"],
      icons: {
        html: "mdi-language-html5",
        js: "mdi-nodejs",
        json: "mdi-json",
        md: "mdi-markdown",
        pdf: "mdi-file-pdf",
        png: "mdi-file-image",
        txt: "mdi-file-document-outline",
        xls: "mdi-file-excel"
      },
      tree: [],
      items: [
        {
          name: ".private_repositories",
          children: [
            {
              name: "Private.md",
              icon: "txt",
              text:
                "A few projects I am working on either in a professional capacity or as a side project that are not publically visible. Please get in contact using the form at the bottom of the page if you would like to know more about these.",
              link: "https://github.com/ADWilkinson"
            }
          ]
        },
        {
          name: "public_repositories",
          children: [
            {
              name: "DogeBot.md",
              icon: "md",
              text:
                "DogeBot is a multi-layered Discordchat bot project ultimately consisting of:<br><br> <ul><li><strong>.NET Core Web API</strong> solution hosted in azure.</li><li><strong>Nodejs application</strong> (the bot itself), which interacts and handles user requests via the .NET Core API.</li><li><strong>Front-end web application</strong> in the planning phase with the intention to use vue.js</li></ul>",
              link: "https://github.com/DogeNet/DogeBot"
            },
            {
              name: "AWCodeWorks.md",
              icon: "md",
              text:
                "This website! This website is a showcase in knowledge in modern front end related frameworks and packages.<br><br><ul><li><strong>Vue</strong> (SPA)</li><li><strong>Vuetify</strong> (Framework used for styling)</li><li><strong>Vue Router</strong></li><li><strong>Vuex</strong> (Use of state management with external API)</li><li><strong>Webpack</strong></li><li><strong>Babel</strong></li><li><strong>Firebase</strong> (Cloud Functions)</li><li><strong>Axios</strong> (HTTP provider for service)</li><li><strong>Eslint</strong></li><li><strong>ES6+ Standards</strong></li></ul>",
              link: "https://github.com/ADWilkinson/AW-Codeworks"
            },
            {
              name: "ObjectPoolFactory.md",
              icon: "md",
              text:
                "A <strong>C# based</strong> helper asset that I had published on the <strong>Unity</strong> asset store for a limited time before not having the time to maintain the package.<br><br>This tool would generate any number of customisable objects for you at during development or at runtime. Proved very useful for quick prototyping when creating some hobby phone games.",
              link:
                "https://github.com/ADWilkinson/UnityAsset.ObjectPoolFactory"
            },
            {
              name: "ObjectGenerator.md",
              icon: "md",
              text:
                "A <strong>C#</strong> based helper asset I had published on the <strong>Unity</strong> asset store for a limited time before not having the time to maintain the package.<br><br>This tool allowed you to generate fully functional and customisable 'object pools', which ultimate allow for much better memory usage compared to constantly destroying and reinstantiated objects.",
              link: "https://github.com/ADWilkinson/UnityAsset.ObjectGenerator"
            }
          ]
        },
        {
          name: "github.profile",
          icon: "json",
          text:
            "Please follow the link below to navigate to my <strong>Github</strong> profile where you will see that I am largely active within development projects and always pushing to learn new skills, even beyond the scope of my current industry job.",
          link: "https://github.com/ADWilkinson"
        },
        {
          name: ".gitignore",
          icon: "txt",
          text: ""
        }
      ]
    };
  },
  computed: {
    currentFolder() {
      // Retrieve the current active folder name that the Treeview component has stored in the state
      return this.$store.getters["home/getCurrentFolder"];
    },
    folderInfo() {
      // Find the relevant folder object in our data object by the current folder name
      return this.flattenedData.find(
        folder => folder.name == this.currentFolder
      );
    }
  },
  methods: {
    // Called when the treeview component emits our custom folder active event
    selectTab() {
      const vm = this;

      /*
      Our tree data object that the treeview component requires has not got a flat structure so here we process it
      into a new array where folder details can easily be searched and displayed on the screen
      */

      let map = new Map(vm.items.entries());
      let folderData = [];

      for (let obj of map) {
        if (obj[1].children) {
          for (let child in obj[1].children) {
            folderData.push(obj[1].children[child]);
          }
        } else {
          folderData.push(obj[1]);
        }
      }

      this.flattenedData = folderData;
      this.folder = this.folderInfo;
    }
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

@media only screen and (max-width: 1250px) {
  .widget {
    display: block;
  }
  .widget-width {
    width: 100%;
  }
}

.file-textbox {
  width: 100%;
  overflow-wrap: break-word;
}
</style>
