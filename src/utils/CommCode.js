/*
 * 公共字符串 ascii的转换、url的编码解码、html的编码
 *
 */

const CommCode = {

  /**
   * 将字符串转化为ascii码
   *
   * @method convertToAsc
   * @param  {String} str 原始字符串
   * @return {String}     转换后的字符串
   */
  convertToAsc(str) {
    return str.charCodeAt(0).toString(16);
  },

  /**
   * 将ascii码转换为字符串
   *
   * @method convertAscToStr
   * @param  {String} str 原始字符串
   * @return {[type]}     转换后的字符串
   */
  convertAscToStr(str) {
    return String.fromCharCode(str);
  },

  /**
   * 对字符串进行URL编码
   *
   * @method encode
   * @param  {String} str 原始字符串
   * @return {[type]}     编码后的字符串
   */
  encode(str) {
    return encodeURIComponent(str);
  },

  /**
   * 为中文进行两次URL编码，以传递给后台   在ie等浏览器中必须采用两次编码
   *
   * @method encodeChinese
   * @param  {String} str 原始URL
   * @return {[type]}     编码后的字符串
   */
  encodeChinese: function (str) {
    return encodeURIComponent(encodeURIComponent(str));
  },

  /**
   * 解码字符串（两次解码）
   *
   * @method decode
   * @param  {String} str 原始URL
   * @return {[type]}     解码后的字符串
   */
  decode: function (str) {
    return decodeURIComponent(decodeURIComponent(str));
  },

  /**
   * 处理html标签 &"<>
   *
   * @method htmlEncode
   * @param  {String} str 原始HTML字符串
   * @return {[type]}     处理过的字符串
   */
  htmlEncode: function (text) {
    return text.replace(/&/g, '&amp').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  },

  /**
   * HTML解码
   *
   * @method htmlDecode
   * @param  {String} str 原始HTML
   * @return {[type]}     解码后的HTML
   */
  htmlDecode: function (text) {
    return text.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  }
};

export default CommCode;
