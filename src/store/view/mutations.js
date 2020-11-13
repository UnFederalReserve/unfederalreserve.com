import { SET_ALL } from './mutation-types';

export default {
  [SET_ALL](state, data) {
    Object.assign(state, data);
    return state;
  },
};
