<template>
  <component
    :is="'h'+element.level"
    :style="{
        textAlign: element.isCenter ? 'center': 'left',
        fontWeight: element.isBold ? 'bold': 'normal',
        marginTop: `${element.mt}px`,
        color: element.color,
      }">
    {{ element.content }}
  </component>
</template>

<script>

import { ref } from 'vue';

export default {
  name: 'textShow',

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
.page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  .header {
    height: 50px;
    border-bottom: 1px solid #dcdfe6;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px 0 10px;
    font-size: 20px;
  }

  .content {
    flex: 1;
    overflow: auto;
  }
}
</style>
