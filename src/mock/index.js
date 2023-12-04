import Mock from 'mockjs';

import { basePath } from '@/api/config.js';
const prePath = `${location.protocol}//${location.host}${basePath}`;

Mock.setup({
  timeout: '350-600'
});

Mock.mock(
  new RegExp(`${prePath}/test1.*`),
  'get',
  function (val) {
    // console.log('mock', val);
    return {
      code: '00000',
      data: {
        aa: 111
      }
    };
  }
);

Mock.mock(
  new RegExp(`${prePath}/test2.*`),
  'post',
  function (val) {
    // console.log('mock', val);
    return {
      code: '00000',
      data: {
        aa: 111
      }
    };
  }
);

export default Mock;
