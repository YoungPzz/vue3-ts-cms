//本地缓存
class LocalCache {
  //保存缓存
  setCache(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value)) //因为setItem要求value是string
  }

  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    }
  }
  deleteCache(key: string) {
    window.localStorage.removeItem(key)
  }
  clearCache() {
    window.localStorage.clear()
  }
}

export default new LocalCache()
