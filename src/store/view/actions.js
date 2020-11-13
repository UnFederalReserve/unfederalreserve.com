import { SET_ALL } from './mutation-types';

export default {
  setScreenWidth({ commit }, screenWidth, screenHeight) {
    commit(SET_ALL, { screenWidth, screenHeight });
  },
  setScreenHeight({ commit }, screenHeight) {
    commit(SET_ALL, { screenHeight });
  },
  setPortraitOrientation({ commit }, portraitOrientation) {
    commit(SET_ALL, { portraitOrientation });
  },
};
