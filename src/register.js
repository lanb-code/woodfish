import Vue from 'vue'

// auto register components
const requireComponentUtil = require.context('./components/util', true, /\.vue$/)
requireComponentUtil.keys().forEach(
  (filePath) => {
    let componentName = requireComponentUtil(filePath).default.name
    Vue.component(componentName, requireComponentUtil(filePath).default)
  }
)

const requireComponentCommon = require.context('./components/common', true, /\.vue$/)
requireComponentCommon.keys().forEach(
  (filePath) => {
    let componentName = requireComponentCommon(filePath).default.name
    Vue.component(componentName, requireComponentCommon(filePath).default)
  }
)
