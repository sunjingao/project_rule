<template>
  <div>
    <div class="item">
      <div class="title">层级</div>
      <el-input-number v-model="setting.level" size="small"></el-input-number>
    </div>
    <div class="item">
      <div class="title">是否居中</div>
      <el-radio-group v-model="setting.isCenter">
        <el-radio :label="true" size="large">是</el-radio>
        <el-radio :label="false" size="large">否</el-radio>
      </el-radio-group>
    </div>
    <div class="item">
      <div class="title">是否加粗</div>
      <el-radio-group v-model="setting.isBold">
        <el-radio :label="true" size="large">是</el-radio>
        <el-radio :label="false" size="large">否</el-radio>
      </el-radio-group>
    </div>
    <div class="item">
      <div class="title">内容</div>
      <el-input v-model="setting.content" size="small"></el-input>
    </div>
    <div class="item">
      <div class="title">距离顶部距离</div>
      <el-input-number v-model.number="setting.mt" type="number" size="small"></el-input-number>
    </div>
    <div class="item">
      <div class="title">字体颜色</div>
      <el-input v-model="setting.color" size="small"></el-input>
    </div>
  </div>
</template>

<script>

import { reactive, watch } from 'vue';
import { cloneDeep } from 'lodash';

export default {
  name: 'textSetting',

  setting: {
    icon: ['icon-wenben_o'],
    des: '文本',
    id: 'text',
    type: 'text',
    level: 3,
    isCenter: false,
    isBold: false,
    content: '内容',
    mt: 0,
    color: 'black'
  },

  props: {
    modelValue: {
      type: Object,
      reuqired: true
    }
  },

  setup(props, { emit }) {

    const setting = reactive(cloneDeep(props.modelValue));

    watch(
      setting,
      (val) => {
        emit('update:modelValue', val);
      }
    );

    return {
      setting
    };
  }
};
</script>

<style scoped lang="scss">

</style>
