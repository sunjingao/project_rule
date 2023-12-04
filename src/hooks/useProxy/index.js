import {getCurrentInstance} from 'vue';

export default {

  getProxy() {
    return getCurrentInstance().proxy;
  },

  getGlobalProperties() {
    return getCurrentInstance().appContext.config.globalProperties;
  }
}
