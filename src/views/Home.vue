<template>
  <v-container class="dark-panel-bg" py-5>
    <v-layout >
    
    <v-flex xs12 sm10 offset-sm1>
      <v-card class="margin-auto" max-width="80%">
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
    <v-flex class="mt-5" xs12 sm4 offset-sm2>
    
      <h2> Projects</h2>
      <v-divider></v-divider>
      
      <treeview :open="open" :tree="tree" :icons="icons" :items="items" @clicked="folderSelected" ></treeview>
      
   </v-flex>
     <v-flex class="mt-5" xs12 sm4>
    
      <h4 class="text-center">File</h4>
      <p></p>
      
   
   </v-flex>
 </v-layout>
 
 <v-layout mb-5 mt-5>
    <v-flex xs3></v-flex>
    <v-flex xs6>
      <contact-form></contact-form>
    </v-flex>
    <v-flex xs3></v-flex>
 </v-layout>
          
<v-layout mb-5>
   <v-flex xs12>
      <h2 class="title my-5 text-xs-center" id="contact-me" v-text="'Contact'" />
      <v-layout justify-center>
        <a href="#" style="text-decoration: none;">
           <v-avatar class="ma-3" size="76px" v-for="(contact, i) in contacts" :color="contact.color" :key="i">
           <v-icon dark large v-text="contact.icon" />
           </v-avatar>
        </a>
       </v-layout>
    </v-flex>
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
      skillIcons: [
        {
          skill: 'Vuejs',
          colour: 'green',
          icon: 'mdi-vuejs'
        },
        {
          skill: 'HTML5',
          colour: 'red',
          icon: 'mdi-language-html5'
        },
        {
          skill: 'JavaScript',
          colour: 'yellow',
          icon: 'mdi-language-javascript'
        },
        {
          skill: 'C#',
          colour: 'pink',
          icon: 'mdi-language-csharp'
        },
        {
          skill: 'CSS3',
          colour: 'orange',
          icon: 'mdi-language-css3'
        },
        {
          skill: 'Nodejs',
          colour: 'green',
          icon: 'mdi-nodejs'
        },
        {
          skill: 'TypeScript',
          colour: 'blue',
          icon: 'mdi-language-typescript'
        }
      ],
      contacts: [
        {
          color: 'blue',
          icon: 'mdi-email'
        },
        {
          color: 'indigo',
          icon: 'mdi-instagram'
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
              name: 'README.md',
              icon: 'md'
            }
          ]
        },
        {
          name: 'public_repositories',
          children: [
            {
              name: 'DogeBot (Public)',
              icon: 'md'
            },
            {
              name: 'AWCodeWorks (Public)',
              icon: 'md'
            },
            {
              name: 'UnityAsset.ObjectPoolFactory',
              icon: 'md'
            },
            {
              name: 'UnityAsset.ObjectGenerator',
              icon: 'md'
            }
          ]
        },
        {
          name: 'github.profile',
          icon: 'json'
        },
        {
          name: '.gitignore',
          icon: 'txt'
        }
      ]
    };
  },
  methods: {
    folderSelected: payload => {
      console.log(payload);
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
</style>

