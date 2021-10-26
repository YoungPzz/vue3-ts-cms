TimeLine

## 2021.10.19 初始化项目

### 1.集成 editorconfig 配置

### 2.使用 prettier 工具

### 3.使用 ESLint 检测

### 4.git Husky 和 eslint

### 5.git commit 规范

### 6.配置好 vuex 和 vuerouter

### 7. 配置 element-plus

##### 如果是局部引用，但样式也要全局引用，很麻烦，希望引入组件的同时引入样式。

### 8.axios 集成封装

### 9.tsconfig.json

### 10.defineComponent

可以帮助作很多类型限制和推导

## 2021.10.24 项目业务

1.normalize.css
2.login 页 3.登录逻辑 ->vuex
登录的逻辑  
 数据保存到某一个位置  
 发送其他的请求
拿到用户的菜单 ->不同用户对应左侧不同菜单
跳到首页 —>重定向到首页，如果没有登录，就到登录页
ps：如果刷新页面，vuex 里面的数据会丢失 //store/index.ts 中 setupStore
