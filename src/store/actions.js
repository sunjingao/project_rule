import * as types from './types';

export default {
  resetParent(context, data) {
    context.commit(types.RESET_PARENT, data);
  }
};
