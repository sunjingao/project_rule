/*
 * 公共工具类：暂未细分
 * */

const CommUtil = {

  /**
   * 判断手机还是PC
   *
   * @method checkUserAgent
   *
   * @return {Boolean}     返回客户端类型（true：PC, false: mobile）
   */
  checkUserAgent() {

    const userAgentInfo = navigator.userAgent;
    // 苹果手机的choiceapp盒子的navigator.userAgent 为 ChoiceApp_iOS
    const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod', 'iOS'];
    let flag = true;
    for (let v = 0, lens = Agents.length; v < lens; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }

};

export default CommUtil;
