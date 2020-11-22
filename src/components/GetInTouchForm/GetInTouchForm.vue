<template lang="pug">
  .GetInTouchForm
    v-form#getintouchform(v-model="valid")
      .row-fields
        v-text-field(
          v-model="name"
          :rules="nameRules"
          label="Name"
          required
          outlined
        )
        v-text-field(
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
          outlined
        )
      v-text-field(
        v-model="subject"
        :rules="subjectRules"
        label="Subject"
        required
        outlined
      )
      v-text-field(
        v-model="message"
        :rules="messageRules"
        label="Your message..."
        required
        outlined
      )
      .row-btn
        v-btn(
          outlined,
          color="secondary"
        ) Submit
</template>

<script>

export default {
  name: 'GetInTouchForm',
  data() {
    return {
      formLoaded: false,
      valid: false,
      name: '',
      subject: '',
      message: '',
      email: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 4 || 'Name must be less than 10 characters',
      ],
      subjectRules: [
        v => !!v || 'Subject is required',
        v => v.length <= 8 || 'Subject must be less than 10 characters',
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length <= 8 || 'Message must be less than 10 characters',
      ],
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    };
  },
  computed: {
    $_form_method() {
      return 'POST';
    },
    _form_url() {
      return 'https://email.webdevelop.pro';
    },
  },
  methods: {
  },
};
</script>

<style lang="sass" scoped>
@import '~Styles/_variables'
.row-fields
  display: flex
  flex-directio: row
  flex-wrap: wrap
  margin: 0 -15px
  .v-text-field
    padding: 0 15px

.row-btn
  display: flex
  justify-content: center
  margin-top: 50px
  margin-bottom: 90px
</style>
