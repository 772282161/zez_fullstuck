- 为什么在SPA之后还需要SSR   现在是SSR+SPA混合使用
  SPA 的好处是显示后，切换页面更快，不用重新刷新页面
    缺点：SEO极差(只挂载了一个root节点，)，首页时间加载过长(因为单页应用的内容都打包在js文件内，需要运行JS文件，)
    首页内容静态化 首页服务器端渲染
  Server Side Rendering  SSR 服务器端渲染  ->  VirtualDOM  React/Vue
  single page web application SPA 单页应用
  跨平台的能力
  1. -> html  传输出去，解决SEO问题(SEO 搜索引擎优化)

- 模块化
  组织代码的需求
node 支持 commonJS  require + module.exports
es6模块化  import + export default