//区分不同环境用到的不同环境变量
// 方式一：手动修改不同的变量
// const BASE_URL = ' http://coderwhy.org/prod'
// const BASE_URL = ' http://coderwhy.org/dev'
// const BASE_URL = ' http://coderwhy.org/test'

// 方式二：根据process.env.NODE_ENV区分
// 开发环境下：development
// 生产环境：production
// 测试环境：text
let BASE_URL = 'http://152.136.185.210:5000'
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://152.136.185.210:5000'
} else if (process.env.NODE_ENV === 'production') {
  // BASE_URL = 'http://coderwhy.org/prod'
}

export { BASE_URL, TIME_OUT }

//方式三：用env.  .. .. .. . .
//以VUE_APP_ 开头会注入到环境中
//在 main.ts 中 console.log(process.env.VUE_APP_BASE_URL)
