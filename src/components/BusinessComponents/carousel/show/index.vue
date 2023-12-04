<template>
  <el-carousel
    :arrow="element.showIndicator ? 'always' : 'never'"
    :height="element.height + 'px'"
    :autoplay="!!element.autoplay"
    :interval="element.interval"
  >
    <el-carousel-item
      v-for="item in element.children"
      :key="item.id"
    >
      <img :src="item.src" class="waH100"/>
    </el-carousel-item>
  </el-carousel>
</template>

<script>

import { ref } from 'vue';

export default {
  name: 'carouselShow',

  props: {
    element: {
      type: Object,
      required: true
    }
  },

  setup() {

    const operateType = ref(1);

    return {
      operateType
    };
  }
};
</script>

<style scoped lang="scss">
.waH100 {
  width: 100%;
  height: 100%;
}
</style>
