<template>
  <div class="container">
    <div class="header">
      前端规范
    </div>
    <div class="doc">
      <leftMenu @changePage="changePage"></leftMenu>
      <div class="content">
        <div v-html="doc" class="markdown-body"></div>
      </div>
    </div>
  </div>
</template>

<script>

import leftMenu from './comps/menu/index';
import { ref } from 'vue';
import { marked } from 'marked';
import { useRouter } from 'vue-router';

export default {
  name: 'index',
  components: {
    leftMenu
  },
  setup() {
    const router = useRouter();
    const contents = ref([]);
    const doc = ref('');

    function changePage(val) {

      router.push({
        path: val
      });

      const path = process.env.Env.PACK_ENV === 'dev' ? `../md${val}.md` : `./md${val}.md`;
      fetch(path)
        .then(response => response.text()).then(
          data => {
            doc.value = marked(data);
          }
        );
    }

    return {
      doc,
      changePage,
      contents
    };
  }
};
</script>

<style scoped lang="scss" src="./css/index.scss"></style>
