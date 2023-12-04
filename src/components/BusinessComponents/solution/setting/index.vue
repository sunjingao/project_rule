<template>
  <div>
    <div v-for="(item, index) in setting.children" :key="index" class="item">
      <div class="title">图片地址</div>
      <el-input v-model="item.src" size="small"></el-input>
    </div>
    <div class="item">
      <div class="addMore">
        <el-button-group>
          <el-button type="primary" @click="addMoreSolution(setting)">新增图片</el-button>
          <el-button @click="deleteMoreSolution(setting)">删除图片</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>

import { reactive, watch } from 'vue';
import { cloneDeep } from 'lodash';

export default {
  name: 'solutionSetting',

  setting: {
    icon: ['icon-jiejuefangan'],
    des: '解决方案',
    type: 'solution',
    id: 'solution',
    children: [
      {
        src: ''
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

    const addMoreSolution = function (content) {
      content.children = content.children || [];
      content.children.push(
        { src: '' }
      );
    };

    const deleteMoreSolution = function (content) {
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
      addMoreSolution,
      deleteMoreSolution
    };
  }
};
</script>

<style scoped lang="scss">

</style>
