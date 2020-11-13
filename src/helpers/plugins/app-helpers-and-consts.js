// import _ from 'Utils';
import consts from 'Config/constans';

export default {
  install(Vue) {
    // eslint-disable-next-line no-param-reassign
    Object.assign(Vue.prototype, {
      $_CONSTS: consts,
      // $_: _,
    });
  },
};
