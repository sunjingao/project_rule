<template>
  <div>
    <div class="item">
      <div class="title">高度：</div>
      <el-input-number v-model="setting.height" size="small"></el-input-number>
    </div>
    <div class="item">
      <div class="title">自动切换时间间隔</div>
      <el-input-number v-model.number="setting.interval" size="small"></el-input-number>
    </div>
    <div class="item">
      <div class="title">是否显示指示器：</div>
      <el-radio-group v-model="setting.showIndicator">
        <el-radio :label="true" size="large">是</el-radio>
        <el-radio :label="false" size="large">否</el-radio>
      </el-radio-group>
    </div>
    <div class="item">
      <div class="title">是否自动切换</div>
      <el-radio-group v-model="setting.autoplay">
        <el-radio :label="true" size="large">是</el-radio>
        <el-radio :label="false" size="large">否</el-radio>
      </el-radio-group>
    </div>
    <div class="item" v-for="(child, childIndex) in setting.children" :key="childIndex">
      <div class="title">图片地址：</div>
      <el-input v-model="child.src" size="small"></el-input>
    </div>
    <div class="item">
      <div class="addMore">
        <el-button-group>
          <el-button
            type="primary"
            @click="addMoreCarousel(setting)"
          >
            新增图片
          </el-button>
          <el-button
            @click="deleteCarousel(setting)"
          >
            删除图片
          </el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, watch } from 'vue';
import { cloneDeep } from 'lodash';

export default {
  name: 'carouselSetting',

  setting: {
    icon: ['icon-lunbotu'],
    des: '轮播图',
    type: 'carousel',
    id: 'carousel',
    showIndicator: true, // 是否显示显示器
    autoplay: true, // 是否自动切换
    height: 200, // 高度
    interval: 3000, // 切换时间
    children: [] // 图片信息
  },

  props: {
    modelValue: {
      type: Object,
      reuqired: true
    }
  },

  setup(props, { emit }) {

    const setting = reactive(cloneDeep(props.modelValue));

    const addMoreCarousel = function (content) {
      content.children = content.children || [];
      content.children.push(
        { src: '' }
      );
    };

    const deleteCarousel = function (content) {
      content.children = content.children || [];
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
      addMoreCarousel,
      deleteCarousel
    };
  }
};
</script>
