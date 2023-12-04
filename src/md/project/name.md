# 命名规范

## 编写规范

项目名：  
规则：小写，以_分隔  
如：my_test

文件名：  
规则：小写，以_分隔，均为单数  
如：test_file

类或构造函数或组件:  
规则：大驼峰  
如：MyComponent

常量:  
规则：全大写，分隔用_  
如：MAX_COUNT

变量名/函数名:  
规则：小驼峰  
如：handleConfirm

css:  
规则：全小写，分隔用-  
如：com-color

命名统一：  
规则：自定义组件声明props的时候，尽量与element保持一致  
原因：  
比如传递一个数组，可以参考element的，叫options；否则，有叫list的，有叫array的，有叫attrList的，很乱

内部变量：  
规则：  
boolean：前面加is  
数组：后面加Arr  
对象：后面加Obj  
函数：获取数据前面加get，设置数据前面加set，操作以其它动词开头  
事件回调：前面加handle  

Vue3编写：  
规则：    
ref：名字后加Rf  
reactive：名字后Rt  
computed：名字后加Cp
hooks文件夹里面的内容也使用use开头  
每个组件必须要有expose  
代码编写顺序: inject，变量声明，computed，methods，回调（handle），watch，生命周期，provide的方法，provide，expose的方法，expose，return

