import Vue from 'vue';
import Vuetify, {
  VApp, // required
  VBtn,
  VContainer,
  VContent,
  VMain,
  VFlex,
  VForm,
  VLayout,
  VTextField,
  VTooltip,
} from 'vuetify/lib';

const options = {
  theme: {
    themes: {
      light: {
        primary: '#042751',
        secondary: '#010450',
        error: '#EF476F',
      },
    },
  },
  breakpoint: {
    thresholds: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
    scrollBarWidth: 24,
  },
};

Vue.use(Vuetify, {
  components: {
    VApp, // required
    VBtn,
    VContainer,
    VContent,
    VFlex,
    VForm,
    VLayout,
    VTextField,
    VTooltip,
    VMain,
  },
});

export default new Vuetify(options);
