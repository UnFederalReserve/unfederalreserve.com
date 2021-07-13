<template lang="pug">
  .GetInTouchForm.get-in-touch-form
    v-form#getintouchform(@submit.prevent="send", ref="form",)
      v-text-field(
        v-model="model.name"
        label="Name"
        solo
        :rules="[rules.required, rules.more_then_3, rules.less_then_300]"
      )
      v-text-field(
        v-model="model.email"
        label="Email"
        solo
        :rules="[rules.required, rules.email]"
      )
      v-text-field(
        v-model="model.subject"
        :rules="[rules.required, rules.more_then_3, rules.less_then_300]"
        label="Subject"
        solo
      )
      v-text-field(
        v-model="model.message"
        label="Your message..."
        solo
        :rules="[rules.required, rules.more_then_3, rules.less_then_300]"
      )
      .row-btn
        button(
          class="btn-rounded btn-gradient btn-default"
          type="submit"
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

.get-in-touch-form
  max-width: 350px
  width: 100% 
  margin: 0 auto
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
  margin-top: 15px
  margin-bottom: 90px

button
  transition: 0.3s
  color: #fff
  max-width: 144px
  width: 100%
  padding: 8px 26px 9px 25px

</style>
