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

## 2021.11.7

### p8 1.解决刷新到 not found 的 bug

#### 动态决定:default-active="defalut_value"

#### 解决去到’/main‘ 没有对应 component 的问题 defalut_value

#### 考虑到面包屑可能在其他项目会用，所以直接封装导 base-ui 里面

#### 绑定 form 的 v-model

现在用的是父组件 user.vue 传值给 form.vue ，虽然可以实现，但改变了 vue 的单向数据流的模式。
所以有新方法，但没..emit 1；51：50

#### YpForm 和 PageSearch 的封装

#### 做 search 下面的 table，把数据都放在 vuex，如 system 单成一个文件夹

#### user 数据的获取和在 state 中的保存

#### eltable 展示数据和 yptable 的封装

#### 难点：yptable 的动态插槽和作用域插槽

### p8

#### 1.数据 v-model 双向绑定 <yp-form v-model="formData"  /> 与组件双向绑定，在组件里接受到的 prop 名为 model.value，form.vue 里有注释

### p9

#### 1.注册全局函数方法放在 global 里,install dayjs 轻量级的 dateFormat 库

#### 2.国际化

#### 3.YPtable 的头部和尾部

#### 4.user.vue -> page-content page-header ->yptable,ypsearch

#### 5.vuex 中针对不同页面的数据处理

### p10

#### 1.父子组件双向绑定，重置时的问题。当点击重置按钮时，执行 page-search.vue 里的 uou，因为这样才可以使子组件触发

#### 2.也可以不用绑定来做。用这种语法糖来做

````javascript
                  :model-value="modelValue[`${item.field}`]"
                  @update:modelValue="handleValueChange($event, item.field)"
````
#### 3.搜索数据 
## main

### ElementPlus 对 main 进行整体布局

```javascript

--.husky  //处理npm run commit
--node_modules
--public
--src
----assets
    --img
    --css
----base-ui  //放置一些其他项目可能用到的组件。
    --breadcrumb  //面包屑,别的组件用到这个组件，只需要传breadcrumbs即可，这里nav-header用到了，并通过路由查寻出结果，传递数据
    --form        //搜索框表单，这里用到三层封装。user.vue里引用page-search,page-search引用YpForm
                  //这里在user/config/search.config里配置好formConfig传到page-search,再通过v-bind传给YpForm
    --table       //content里面的表格
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
      --cache.ts  //本地缓存 run
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
````
