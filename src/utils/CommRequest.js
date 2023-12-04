/*
 * 公共请求
 *
 */

import axios from 'axios';

const service = axios.create({
  baseURL: process.env.Env.REMOTE_ADDRESS || (`${location.protocol}//${location.host}`),
  withCredentials: true, // 跨域请求携带cookie
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  },
  timeout: 1000 * 60 // 请求超时毫秒数
});

service.interceptors.request.use(
  config => {
    // if (config.method.toLowerCase() === 'get') {
    //   config.headers['content-type'] = 'application/x-www-form-urlencoded';
    // } else {
    //   config.headers['content-type'] = 'application/json';
    // }
    //
    // // 自定义表头
    // Object.assign(
    //   config.headers,
    //   {
    //     token: '' // 自定义请求头
    //   }
    // );

    // POST: data,GET:params
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 返回数据处理
service.interceptors.response.use(
  response => {
    const codeType = {
      '00000': '成功',
      '00010': '用户登录已过期，请重新登录',
      40000: '请求参数错误，请核对',
      40001: '未授权访问或访问的URL不存在',
      40010: '用户不存在，请重新输入',
      40011: '用户密码错误，请重新输入',
      40030: '请输入验证码',
      40031: '验证码错误，请重新输入',
      40032: '验证码失效，请重新输入',
      50000: '系统错误，请联系管理员',
      50010: '数据库异常，请联系管理员'
    };
    const res = response.data;
    const code = res.code;
    if (code !== '00000') {
      CommErrorLog.savePointInterfaceError(response);
      if (code === '00010') {
        return alert(codeType[code]);
      } else {
        const msg = codeType[code] || '其他错误';
        alert(msg);
        return Promise.reject(res);
      }
    } else {
      // 接收正常数据
      return Promise.resolve(res.data);
    }
  },
  error => {
    CommErrorLog.savePointNetError(error);
    alert(`错误代码：[${error.response && error.response.status || ''}]；错误提示：[${error.message}]`);
    return Promise.reject(error);
  }
);

export default service;
