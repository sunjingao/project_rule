<template>
  <div
    :style="
      element.children.length > 1 ? {
            display: 'flex',
            justifyContent: 'center',
          } : {
            textAlign: 'center'
          }
        "
  >
    <div class="dib">
      <img
        v-for="(item, index) in element.children"
        :key="index"
        :src="item.src"
        class="img"
      />
    </div>
  </div>
</template>

<script>

import { ref } from 'vue';

export default {
  name: 'solutionShow',

  props: {
    element: {
      type: Object,
      required: true
    }
  },

  setup() {

    const operateType = ref(1);

    const toggleProduct = function (item, element) {
      const index = element.children.indexOf(item);
      element.children.forEach(
        (val, key) => {
          val.isSelected = index === key;
        }
      );
    };

    return {
      operateType,
      toggleProduct
    };
  }
};
</script>

<style scoped lang="scss">
.img {
  &:not(:first-child) {
    margin-left: 10px;
  }

  width: 352px;
  height: 430px;
}
</style>
