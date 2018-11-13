<template>
  <div>
    
 
    
    
  </div>
</template>
<script>
import ContactForm from '@/components/ContactForm.vue';
export default {
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
