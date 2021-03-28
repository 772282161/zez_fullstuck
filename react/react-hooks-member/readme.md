# react + ts 怀抱

1. logo
    webpack bundler
    一切静态资源皆可打包

2. DisplayData   更加安全
    ts 展示数据步骤
        1.异步/同步  Promise + ts
        2.api 模块化
        3.ts  model
        members  是一个数组
        js []  ts type[] 

3. react 项目的目录架构，怎么理解？
    小型项目，没那么多要求，webpack  index.ts -> App ->Component
    大型项目，react 全家桶组织起来，MVVM  ->  SPA  router + 数据管理Redux
        /api   请求的管理
        /pages   路由级别组件
        /model   ts独有的，对所有的数据做interface 的定义


    ts +  react 拦路虎 api
    1. 组件里要有数据  生命周期来请求
    2./api  提供了 members.fetchMember
    3. 返回的是thenable的数据
    4.api 定义的时候 Promise.resolve(data)  thenable  | return data 是不对的
    5.ts  要对 api 请求方法做类型的检查  返回值
        :Promise<MemberEntity[]>
    6.model 提供了对MemberEntity 定义