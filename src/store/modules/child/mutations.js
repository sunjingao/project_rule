import * as types from './types';

export default {
  [types.RESET_CHILD](state, data) {
    state.childData = data;
  }
};
