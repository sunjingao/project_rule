import * as types from './types';

export default {
  resetChild(context, data) {
    context.commit(types.RESET_CHILD, data);
  }
};
