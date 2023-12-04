import * as types from './types';

export default {
  [types.RESET_PARENT](state, data) {
    state.parentData = data;
  }
};
