import { RouteRecordRaw } from 'vue-router' //route的类型

//该函数将menus转化为Routes
export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1.先去加载默认所有的routes
  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/)
  //webpack的函数，读取文件夹
  routeFiles.keys().forEach((key) => {
    // console.log(key)
    //  ./analysis/dashboard/dashboard.ts
    //  ./analysis/overview/overview.ts
    //  ./product/category/category.ts
    //  ./product/goods/goods.ts
    //  ./story/chat/chat.ts
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  // console.log(allRoutes)

  //2.根据菜单获取需要添加的routes
  //type= 1 ->children
  //type= 2 ->url ->route
  //所以使用一个递归函数比较好
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        //es6函数
        const route = allRoutes.find((route) => {
          return route.path === menu.url
        })
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}
