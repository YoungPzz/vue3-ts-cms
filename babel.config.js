module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: 'element-plus',
        customStyleName: (name) => {
          return `element-plus/lib/theme-chalk/${name}.css`
        } //次引入一个组件，都引入其css样式
      }
    ]
  ],
  presets: ['@vue/cli-plugin-babel/preset']
}
