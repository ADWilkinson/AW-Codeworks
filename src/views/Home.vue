<template>
  <v-container py-5>
    <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Profile</h3>
            <div>London based Software Engineer specialising in the latest technologies within the .NET and JavaScript ecosystem. Strong knowledge and experience in the following languages, frameworks & packages include C#, MVC, ASP.NET, .NET, SQL, JavaScript, Vue.js, Node.js, HTML, CSS, Webpack, REST Web API. Further experience in developing automation frameworks from scratch for large web projects using Selenium & Specflow in C#. Comfortable working in multi disciplinary, agile environments using both front and back end technologies with a core drive and passion for innovation on each project worked on in addition to being self-sufficient and proactive about learning. Other interests include Music Production, Socialising & Blockchain Tech / Cryptocurrency Markets.</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-chip outline color="red">
            <v-icon left>build</v-icon>vuejs
          </v-chip>
          <v-chip outline color="red">
            <v-icon left>build</v-icon>language-html5
          </v-chip>
          <v-chip outline color="red">
            <v-icon left>build</v-icon>language-javascript
          </v-chip>
            <v-chip outline color="red">
            <v-icon left>build</v-icon>language-csharp
          </v-chip>
          </v-chip>
            <v-chip outline color="red">
            <v-icon left>build</v-icon>language-css3
          </v-chip>
          </v-chip>
            <v-chip outline color="red">
            <v-icon left>build</v-icon>nodejs
          </v-chip>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>



<v-layout mb-5>
     <v-flex xs3>     </v-flex>
      <v-flex xs6>

        <contact-form></contact-form>
   


  
          </v-flex>
        </v-layout>
             <v-flex xs3>     </v-flex>
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

export default {
  name: 'home',
  components: {
    ContactForm
  },
  data() {
    return {
      contacts: [
        {
          color: 'blue',
          icon: 'mdi-email'
        },
        {
          color: 'indigo',
          icon: 'mdi-instagram'
        }
      ]
    };
  }
};
</script>
