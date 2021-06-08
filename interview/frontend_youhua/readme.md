## CDN 的核心  一个是缓存， 一个是回溯

- CDN + webpack 
  - CDN 内容分发网络  webpack 工作流套件中的打包工具

cookie 是一个字符串，作为文本，便于在请求头中带上发送。
页面请求次数以亿计算，连接数(复杂度)，带宽费

cookie 属性：
  Expires
  Name
  Value
  Path
  Domain  与CDN 有关
  Size
  HttpOnly
  Secure

静态资源永久存储CDN

降低传输速度，增加费用


- HTML5 localStorage
- 前端项目如何部署到CDN
  - 大厂是一定要做CDN的，一键发布，CDN部署运维的工作

- 性能优化的知识脉络
  当用户第一次访问的时候
  1. 网络端 CDN
  2. Gzip 压缩，webpack有对 css，js 压缩插件 -> webpack -> Tree shaking
  
  当用户访问过一次，前端比较熟悉的
  3. 存储层 
    浏览器的缓存机制
    本地存储 cookie localStorage sessionStorage indexDB 
  4. 服务器端渲染  ssr  网站首页用SSR
  5. 渲染层
    CSS 重绘重排
  6. eventloop


- CDN 优化的细节
  域名的选取
  www.taobao.com 业务服务器 做计算
  g.alicdn.com CDN服务器，只需要做回溯与缓存


sideEffects
webpack 不会把lodash-es 所有的代码 内容 打包进来，只是打包了你用到的两个模块，
只是sideEffect

useExports 是通过Terser 来检测未使用的部分代码，是否有副作用