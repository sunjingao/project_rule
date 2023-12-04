import { createStore } from 'vuex';
import state from '@/store/state';
import getters from '@/store/getters';
import mutations from '@/store/mutations';
import actions from '@/store/actions';
import child from './modules/child/index';

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules: {
    child
  }
});
