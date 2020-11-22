<template lang="pug">
  .GetInTouchForm
    v-form#getintouchform(@submit.prevent="send")
      .row-fields
        v-text-field(
          v-model="model.name"
          :rules="nameRules"
          label="Name"
          required
          outlined
        )
        v-text-field(
          v-model="model.email"
          :rules="emailRules"
          label="Email"
          required
          outlined
        )
      v-text-field(
        v-model="model.subject"
        :rules="subjectRules"
        label="Subject"
        required
        outlined
      )
      v-text-field(
        v-model="model.message"
        :rules="messageRules"
        label="Your message..."
        required
        outlined
      )
      .row-btn
        v-btn(
          outlined,
          type="submit",
          color="secondary"
        ) Submit
</template>

<script>
import formMixin from 'Helpers/form/formMixin';

export default {
  name: 'GetInTouchForm',
  mixins: [formMixin],
  data() {
    return {
      formLoaded: false,
      valid: false,
      model: {
        name: '',
        subject: '',
        message: '',
        email: '',
      },
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      subjectRules: [
        v => !!v || 'Subject is required',
        v => v.length <= 30 || 'Subject must be less than 30 characters',
      ],
      messageRules: [
        v => !!v || 'Message is required',
        v => v.length <= 50 || 'Message must be less than 50 characters',
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
    $_form_url() {
      return 'https://email.webdevelop.pro';
    },
  },
  methods: {
    async send() {
      try {
        await this.$_form_send();
        this.$emit('success');
        this.formSent = true;
      } catch (ignore) {} // eslint-disable-line
    },
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
