## react + ts 
1.npx create-react-app rtsdemo --template typescript
npx 创建react项目

2.不同的需求，项目结构如何，
  - 简单应用 
    components 组件 + api 数据分离(也可以用数据请求) + model(跨文件取接口 ts的自定义类型type 接口 model 1.api promise<MemberEntity[]> 约束服务器端返回数据的类型, 2.显示某一个用户 子组件 props:MemberEntity)

  - 全家桶 开发比较全面而复杂的应用时  单页应用 SPA
    react/dom + 
    react-router/react-router-dom + 
    redux/react-redux  |  mobx
    components + pages(store) + store + api + routes 

  - 自定义构建流程 webpack babel

  - 全栈项目 
    - egg.js + react + mysql 
      - didi-frontend  creacte-react-app
      - didi-backend egg init
      - db migration (数据迁移) + database/table(索引) + seeds(初始化数据)

  - SSR 项目 服务器端渲染 解决SEO问题  SEO(搜索引擎优化)
    - 掘金就是一个SSR 项目
    - SPA 单页应用 #root bundle.js 组件 + 数据状态
