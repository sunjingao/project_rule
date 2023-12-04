
## 一：为什么使用Vue3？
### 1：运行速率更高：
* 优化了内部的differ算法；  
* 生成AST语法树的过程中添加了些标记，减少重复运算。

### 2：打包体积更小：
* 现在大部分的插件库都是使用按需引入的，而vue2使用全部引入的方式。

### 3：更好的TS支持；

### 4：更加国际化：
* 横向框架比较，与react等其它主流框架写法更加接近，差异更小。框架通用性更强。


***

## 二：vue2 vs vue3 使用上的区别

### 1：初始化方式不同
* vue3在入口处会通过单例来注入。Vue2是全局注入。即vue2的初始化是new Vue()，而vue3是通过createApp。

### 2：页面入口不同
* vue2最初的入口是beforeCreate。  
* vue3的页面入口在setup中，且this不再指向全局。  
* Setup接受两个参数，分别是props和context。  
* Context提供了emit,attrs,slots等方法。（注意每个方法的使用）

### 3：vue3内部函数将按需引入
* 不再像之前一样全部注入，能够显著的减少打包后的体积。

### 4：编写方式上的不同
* vue2是Options API。  
* vue3更加注重函数式编程，即Composition API。  
* 类似于C语言和C++/JAVA的区别。

### 5：生命周期的区别
* vue3没有beforeCreated，created：  
* beforeMount -> onBeforeMount  
* mounted -> onMounted  
* beforeUpdate -> onBeforeUpdate  
* updated -> onUpdated  
* beforeDestroy -> onBeforeUnmount  
* destroyed -> onUnmounted

### 6：响应式数据变化
* vue2的响应式数据放在data中。  
* vue3的响应式数据是通过ref，reactive等方式创建。  
* 注意toRefs结构的方式。  
* proxy响应式数据的优势。

### 7：获取当前DOM实例
* 通过声明ref的方式来获取。

### 8：获取全局变量的方式
* app.config.globalProperties.globalValue.  
* instance.appContext.config.globalProperties.

### 9：其它常用内容
* computed，watch，父子组件传值，插槽，自定义指令等内容的使用。

### 10：被移除的属性
* vue3移除了$listeners，但是保留$attrs  
* 不再支持过滤器  
* 移除了$parent, $children  




