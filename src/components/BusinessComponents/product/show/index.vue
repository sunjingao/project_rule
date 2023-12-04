<template>
  <div class="product">
    <div class="level1">
      <div
        v-for="(item, index) in element.children"
        :key="index"
        :style="{
          borderBottom: item.isSelected ? '2px solid blue' : 'none',
          marginTop: '1px',
          cursor: 'pointer'
        }"
        @click="toggleProduct(item, element)"
      >
        <div class="tc">
          <img :src="item.src" class="imgSize"/>
        </div>
        <div class="imgDes">
          {{ item.des }}
        </div>
      </div>
    </div>
    <div v-for="(item, index) in element.children" :key="index">
      <div v-if="item.isSelected" class="level2">
        <div
          v-for="(child, childIndex) in item.children"
          :key="childIndex"
          class="item"
        >
          <div class="title">
            {{ child.title }}
          </div>
          <div class="des">
            {{ child.des }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ref } from 'vue';

export default {
  name: 'productShow',
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

.product {
  width: 72%;
  margin: 0 auto;

  .level1 {
    position: relative;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #dcdfe6;

    .imgSize {
      width: 50px;
      height: 50px;
    }

    .imgDes {
      text-align: center;
      font-size: 14px;
      font-weight: bold;
      margin-top: 10px;
      margin-bottom: 10px;
    }
  }

  .level2 {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .item {
      width: 350px;
      padding: 5px 20px;
      border: 1px solid #dcdfe6;

      &:hover {
        box-shadow: -1.5px 0px 3px rgba(34, 126, 229, 0.2), 0px -1.5px 3px rgba(34, 126, 229, 0.2), 1.5px 0px 3px rgba(34, 126, 229, 0.2), 0px 1.5px 3px rgba(34, 126, 229, 0.2);
      }

      .title {
        font-size: 13px;
        color: #333333;
        font-weight: bold;
        overflow: auto;
        word-break: break-all;
        white-space: normal;
      }

      .des {
        font-size: 12px;
        color: #999999;
        overflow: auto;
        word-break: break-all;
        white-space: normal;
        margin-top: 10px;
      }
    }
  }
}
</style>
