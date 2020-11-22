const mixin = {
  data() {
    return {
      model: {},
      $_form_data_loading: false,
      $_form_data_dirty: false,
      $_form_data_validate: true,
      $_form_data_disabled: false,
    };
  },
  computed: {
    $_form_loading: {
      get() {
        return this.$data.$_form_data_loading;
      },
      set(value) {
        this.$data.$_form_data_loading = value;
      },
    },
    $_form_dirty: {
      get() {
        return this.$data.$_form_data_dirty;
      },
      set(value) {
        this.$data.$_form_data_dirty = value;
      },
    },
    $_form_validate: {
      get() {
        return this.$data.$_form_data_validate;
      },
      set(value) {
        this.$data.$_form_data_validate = value;
      },
    },
    $_form_disabled: {
      get() {
        return this.$data.$_form_data_disabled;
      },
      set(value) {
        this.$data.$_form_data_disabled = value;
      },
    },
    $_form_origin() {
      return window.location.origin;
    },
    $_form_path() {
      return '';
    },
    $_form_url() {
      return this.$_form_origin + this.$_form_path;
    },
    $_form_method() {
      return 'POST';
    },
    $_form_resetOnSuccess() {
      return true;
    },
    $_form_afterSuccessDisabledTimeout() {
      return 0;
    },
    $_form_blocked() {
      return this.$_form_disabled || this.$_form_loading;
    },
    $_form_defaultSendOptions() {
      return {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
        },
      };
    },
    $_form_sendOptions() {
      return {};
    },
  },
  methods: {
    $_from_reset() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
      this.$_form_dirty = false;
      this.$_form_validate = false;
    },
    $_form_getRequestBody() {
      return JSON.stringify(this.model);
    },
    async $_form_beforeFormSend() {
      if (this.$_form_disabled) {
        throw new Error('Form is disabled');
      }
      const { form } = this.$refs;
      if (!form) {
        throw new Error('Reference on v-form element is required');
      }
      this.$_form_dirty = true;
      this.$_form_validate = form.validate();
      if (!this.$_form_validate) {
        throw new Error('Form validation error');
      }
      this.$_form_loading = true;
      this.$_form_disabled = true;
      return form;
    },
    async $_form_onSendSuccess(json) {
      if (this.$_form_resetOnSuccess) {
        this.$_from_reset();
      }
      this.$_form_loading = false;
      setTimeout(() => {
        this.$_form_disabled = false;
      }, this.$_form_afterSuccessDisabledTimeout);
      return json;
    },
    async $_form_onSendError(error) {
      this.$_form_loading = false;
      this.$_form_disabled = false;
      try {
        this.errorMsg = JSON.stringify(error);
      } catch {
        this.errorMsg = error;
      }
      throw this.errorMsg;
    },
    async $_form_fetch(url, params) {
      const result = {
        success: false,
        status: 0,
        data: {},
      };
      try {
        const response = await fetch(url, params);
        if (response.status >= 200 && response.status <= 205) {
          result.success = true;
        }
        result.status = response.status;
        // if body is not empty
        if (response.statusText !== 'No Content'
          // and if content type is set
          && response.headers.get('Content-Type') != null
          // and if its json
          && response.headers.get('Content-Type').indexOf('json') !== -1
          // and if content is here
          && response.headers.get('Content-Length') !== 0) {
          // maybe just do try/catch?
          result.data = await response.json();
        } else {
          result.data = await response.text();
        }
      } catch (e) {
        // eslint-disable-next-line
        console.error(e);
      }
      return result;
    },
    async $_form_send() {
      // await this.$_form_beforeFormSend();
      const body = this.$_form_getRequestBody();
      try {
        const params = {
          method: this.$_form_method,
          body,
          ...this.$_form_defaultSendOptions,
          ...this.$_form_sendOptions,
        };
        const response = await this.$_form_fetch(this.$_form_url, params);
        if (response.success === false) {
          return this.$_form_onSendError(response.data);
        }
        return this.$_form_onSendSuccess(response.data);
      } catch (e) {
        return this.$_form_onSendError(e);
      }
    },
  },
  staticData() {
    return {
      rules: {
        required: value => !this.$_form_dirty || !!value || 'Field is required.',
        more_then_3: value => !this.$_form_dirty || (`${value}`).length > 3 || 'Must be at least 4 characters.',
        less_then_300: value => !this.$_form_dirty || (`${value}`).length < 300 || 'Must  be at most 300 characters.',
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return !this.$_form_dirty || pattern.test(value) || 'Not a valid email address.';
        },
      },
      $super: mixin.methods,
    };
  },
};

export default mixin;
