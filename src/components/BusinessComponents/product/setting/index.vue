<template>
  <div>
    <div v-for="(item, index) in setting.children" :key="index" class="twoLevel">
      <div class="item">
        <div class="title">一级图片地址</div>
        <el-input v-model="item.src" size="small"></el-input>
      </div>
      <div class="item">
        <div class="title">一级文字描述</div>
        <el-input v-model="item.des" size="small"></el-input>
      </div>
      <div v-for="(child, childIndex) in item.children" :key="childIndex" style="margin-top: 10px;">
        <div class="item">
          <div class="title">二级文字描述标题</div>
          <el-input v-model="child.title" size="small"></el-input>
        </div>
        <div class="item">
          <div class="title">二级文字描述</div>
          <el-input v-model="child.des" size="small"></el-input>
        </div>
      </div>
      <div class="item">
        <div style="display: flex;justify-content: center">
          <el-button-group>
            <el-button type="primary" @click="addMoreSecondProducts(item)">新增二级</el-button>
            <el-button @click="deleteMoreSecondProducts(item)">删除二级</el-button>
          </el-button-group>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="addMore">
        <el-button-group>
          <el-button type="primary" @click="addMoreProducts(setting)">新增一级</el-button>
          <el-button @click="deleteMoreProducts(setting)">删除一级</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, watch } from 'vue';
import { cloneDeep } from 'lodash';

export default {
  name: 'productSetting',

  setting: {
    icon: ['icon-shangpin-xianxing'],
    des: '商品',
    type: 'product',
    id: 'product',
    children: [
      {
        src: '',
        des: '',
        isSelected: true,
        children: [
          {
            title: '',
            des: ''
          }
        ]
      }
    ]
  },

  props: {
    modelValue: {
      type: Object,
      reuqired: true
    }
  },

  setup(props, { emit }) {

    const setting = reactive(cloneDeep(props.modelValue));

    const addMoreSecondProducts = function (content) {
      content.children.push({
        title: '',
        des: ''
      });
    };
    const deleteMoreSecondProducts = function (content) {
      content.children.pop();
    };

    const addMoreProducts = function (content) {
      content.children.push(
        {
          src: '',
          des: '',
          isSelected: false,
          children: [
            {
              title: '',
              des: ''
            }
          ]
        }
      );
    };

    const deleteMoreProducts = function (content) {
      if (content.children.length <= 1) {
        return;
      }
      content.children.pop();
    };

    watch(
      setting,
      (val) => {
        emit('update:modelValue', val);
      }
    );

    return {
      setting,
      addMoreSecondProducts,
      deleteMoreSecondProducts,
      addMoreProducts,
      deleteMoreProducts
    };
  }
};
</script>

<style scoped lang="scss">

</style>
