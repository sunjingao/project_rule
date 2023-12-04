<template>
  <el-menu
    class="menu"
    :default-active="defaultActive"
    :default-openeds="defaultOpened"
    @select="handleSelect"
  >
    <el-sub-menu v-for="parent in menuData" :index="parent.path" :key="parent.path">
      <template #title>
        <span>{{ parent.title }}</span>
      </template>
      <el-menu-item v-for="child in parent.children" :index="child.path" :key="child.path">
        {{ child.title }}
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>

import { defineComponent, reactive, ref } from 'vue';
import { asyncRoutes } from '@/router/index';

export default defineComponent({
  name: 'index',
  setup(props, { emit }) {

    const defaultActive = ref('');
    const defaultOpened = reactive([]);
    const menuData = reactive(asyncRoutes);

    function init() {

      const initRoute = location.href.match(/(?<=#)\S+/)[0];
      let hasInitRoute = false;

      menuData.forEach(
        item => {
          defaultOpened.push(item.path);
          item.children.forEach(
            child => {
              if (child.isDefaultActive) {
                defaultActive.value = child.path;
              }
              if (initRoute === child.path) {
                hasInitRoute = true;
              }
            }
          );
        }
      );
      if (hasInitRoute) {
        defaultActive.value = initRoute;
        emit('changePage', initRoute);
      } else {
        emit('changePage', defaultActive.value);
      }
    }

    const handleSelect = (a) => {
      emit('changePage', a);
    };

    init();

    return {
      defaultActive,
      defaultOpened,
      menuData,
      handleSelect
    };
  }
});
</script>

<style lang="scss" scoped>
.menu {
  width: 200px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
