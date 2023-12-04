
// 上送接口
/* eslint-disable-next-line */
// function savePoint(name, val) {
//   // 上送日志信息
// }

const CommErrorLog = {

  // initGlobal(app) {
  //   // 捕获window报错，添加报错日志
  //   window.addEventListener(
  //     'error',
  //     e => {
  //       savePoint('windowError', e.error);
  //     }
  //   );
  //
  //   // 捕获vue报错，添加报错日志
  //   /* eslint-disable-next-line */
  //   app.config.errorHandler = function (err, vm, info) {
  //     // console.log(err); // 捕获vue报错后，页面不会打印报错信息，手动添加报错信息
  //     savePoint('vueError', err);
  //   };
  // },

  // 请求报错日志 接口问题
  // savePointInterfaceError: response => {
  // const params = {
  //   url: location.href,
  //   responseMsg: response.data.responseMsg,
  //   responseCode: response.data.responseCode,
  //   request: response.request.responseURL,
  //   status: response.status,
  //   method: response.config.method, // 请求方法
  //   requestData: response.config.data, // 请求参数
  //   responseData: JSON.stringify(response.data), // 返回值
  //   params: response.config.params // 请求参数
  // };
  // console.log(params);
  // },
  // 请求报错埋点日志 网络问题
  // savePointNetError: error => {
  // const response = error.response;
  // const params = {
  //   url: location.href,
  //   msg: error.message, // 报错信息
  //   status: response.status, // 报错状态
  //   request: response.request.responseURL, // 报错的请求地址
  //   method: response.config.method, // 请求方法
  //   requestData: response.config.data, // 请求传参 get/post
  //   params: response.config.params // 请求传参 get/post
  // };
  // console.log(params);
  // }
};

export default CommErrorLog;
