<template>
    <v-form action="https://formspree.io/you@email.com" method="POST">
    <v-text-field
      v-model="name"
      :rules="[rules.required, rules.length(30)]"
      :counter="30"
      label="Name"
      name="name"
      required
    ></v-text-field>
    <v-text-field
      v-model="email"
      :rules="[rules.required, rules.email]"
      label="E-mail"
      name="_replyto"
      required
    ></v-text-field>
      <v-textarea
      v-model="message"
      :rules="[rules.length(300), rules.required]"
      :counter="300"
      label="Message"
      name="message"
      required
    ></v-textarea>
     <v-btn type="submit" value="Send" :disabled="!formValidity">submit</v-btn>
    <v-btn @click="clear">clear</v-btn>
  </v-form>
</template>

<script>
export default {};
</script>
<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      message: '',
      rules: {
        email: v => (v || '').match(/@/) || 'Please enter a valid email',
        length: len => v => (v || '').length <= len || `Invalid character length, limit: ${len}`,
        required: v => !!v || 'This field is required'
      }
    };
  },
  computed: {
    formValidity() {
      return this.email !== '' && this.name !== '' && this.message !== '';
    }
  },
  methods: {
    clear() {
      this.name = '';
      this.email = '';
      this.message = '';
    }
  }
};
</script>

<style>
</style>
