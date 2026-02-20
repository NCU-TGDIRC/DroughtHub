const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: [],

  // 加入這段來移除進度條套件
  chainWebpack: config => {
    config.plugins.delete('progress')
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? '/DroughtHub/'   // 一定要跟 repo 名稱一模一樣
    : '/'
})

