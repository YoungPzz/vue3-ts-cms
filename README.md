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

```javascript

--.husky  //处理npm run commit
--node_modules
--public
--src
----assets
      --img
      --css
----components
----global
      --index.ts                   //出口到main.ts，全局配置局部element
      --register-element.ts  //引入elementPlus，并注册相关组件
----plugins  //插件
      --element.js
----router   //配置路由
----service  //网络请求文件夹 //拦截器 loading等
      --login      //登录模块的网络请求
      --request  //网络请求得基本配置
         --config.ts   //基本axios公共信息配置，包括BASE_URL,TIME_OUT
         --index.ts    //定义了类 YPRequst，传给constructor的参数类型为自定义的YPRequestConfig（拓展了AxiosRequestConfig，包含拦截器）
         --type.ts     //其中包括拦截器和AxiosRequestConfig的参数定义，本来能传给axios的参数只有规定的，现做了拓展
      index.ts //出口，定义拦截器函数，请求头带token
----store     //VueX
      --login //login模块
         --login.ts
      --index.ts  //引入了login模块
      --types.ts
----utils  //工具文件夹
      --cache.ts  //本地缓存
----views //视图
----App.vue
----main.ts
----shims-vue.d.ts
--.browserslistrc
--.editorconfig
--.env.development
--.eslintrc.js
--.gitignore
--.prettierignore
--.prettierrc
--babel.config.js
--commitlint.config.js
--package-lock.json
--package.json
--README.md
--tsconfig.json
--vue.config.js
```
