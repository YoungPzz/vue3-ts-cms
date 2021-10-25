// import axios from 'axios'

//全局axios配置选项
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 10000 //配置超时时间
// axios.get('/home/multidata').then((res) => {
//   console.log(res)
// })

//axios.all ->多个请求，我希望所有请求同时返回·
// axios
//   .all([
//     //请求1
//     //请求2
//   ])
//   .then((res) => {
//     console.log(res[0])
//   })

//axios 拦截器
//在发送请求之前想先做一些事情，加入每一个请求都需要携带token，header[token]
//请求时间比较长，显示loading
//fn1:请求发送成功会执行的函数
//fn2:请求发送失败会执行的函数
// axios.interceptors.request.use(fn1, fn2)

// axios.interceptors.request.use(
//   (config) => {
//     //想做的动作
//     //1.给请求添加token
//     //2.isLoading动画
//     return config
//   },
//   (err) => {
//     return err
//   }
// )

//fn1:服务器正常放回了数据 20x
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截')
//     return res
//   },
//   (err) => {
//     return err
//   }
// )
