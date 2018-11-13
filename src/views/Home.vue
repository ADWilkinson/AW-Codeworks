<template>
  <v-container py-5>
    <v-layout wrap mb-5>
      <v-flex xs8>
        <h2 class="title mb-3" id="about-me" v-text="'About Me'" />
        <p v-text="'Profile chit chat'" />
      </v-flex>
      <v-flex xs4> <img src="../assets/logo.svg" :alt="'Blah blah blah'" width="100%" /> </v-flex>
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
